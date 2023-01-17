import { useMemo, useState } from "react";
import { debounce } from "@mui/material/utils";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import { GridToolbarContainer, useGridApiContext } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import moment from "moment";
import ReplayIcon from "@mui/icons-material/Replay";
import ReactExport from "react-export-excel";
import Button from "@mui/material/Button";
import {
  interviewDefaultColumnsExcelHeaders,
  studentDefaultColumnsExcelHeaders,
} from "./defaultColumnsExcelHeaders";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const CustomDataGridToolbar = (label, data, idType) => {
  const apiRef = useGridApiContext();
  const [searchValue, setSearchValue] = useState("");
  const currentDate = moment().format("DD_MM_YYYY");

  const updateSearchValue = useMemo(() => {
    return debounce((newValue) => {
      apiRef.current.setQuickFilterValues(
        newValue.split(" ").filter((word) => word !== "")
      );
    }, 500);
  }, [apiRef]);

  const handleSearchValueChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    updateSearchValue(newValue);
  };
  const fileName =
    idType === "student"
      ? `Base de datos de estudiantes ${currentDate}`
      : `Entrevistas Colegio Creciendo ${currentDate}`;

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >
        <GridToolbarContainer>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              value={searchValue}
              variant="standard"
              size="small"
              color="secondary"
              onChange={handleSearchValueChange}
              label={label}
            />
          </Box>
        </GridToolbarContainer>

        <Box>
          <ExcelFile
            filename={fileName}
            element={
              <Button
                variant="text"
                color="secondary"
                startIcon={<DownloadIcon />}
              >
                Exportar base de datos
              </Button>
            }
          >
            <ExcelSheet data={data} name="Estudiantes">
              {idType === "student"
                ? studentDefaultColumnsExcelHeaders.map((column, key) => (
                    <ExcelColumn
                      key={key}
                      label={column.headerName}
                      value={column.field}
                    />
                  ))
                : interviewDefaultColumnsExcelHeaders.map((column, key) => (
                    <ExcelColumn
                      key={key}
                      label={column.headerName}
                      value={column.field}
                    />
                  ))}
            </ExcelSheet>
          </ExcelFile>
          <IconButton aria-label="refresh" onClick={handleRefresh}>
            <ReplayIcon />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
};

export default CustomDataGridToolbar;
