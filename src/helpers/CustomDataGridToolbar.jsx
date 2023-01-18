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
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import Button from "@mui/material/Button";
import {
  interviewDefaultColumnsExcelHeaders,
  studentDefaultColumnsExcelHeaders,
} from "./defaultColumnsExcelHeaders";

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

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = () => {
    const datos = [];
    const headers =
      idType === "student"
        ? studentDefaultColumnsExcelHeaders
        : interviewDefaultColumnsExcelHeaders;

    for (const i in data) {
      const item = data[i];
      const row = {};
      for (const j in headers) {
        const header = headers[j];
        row[header.headerName] = item[header.field];
      }
      datos.push(row);
    }
    const ws = XLSX.utils.json_to_sheet(datos);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataExcel = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(dataExcel, fileName + fileExtension);
  };

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
          <Button
            variant="text"
            color="secondary"
            startIcon={<DownloadIcon />}
            onClick={exportToExcel}
          >
            Exportar base de datos
          </Button>
          <IconButton aria-label="refresh" onClick={handleRefresh}>
            <ReplayIcon />
          </IconButton>
        </Box>
      </Stack>
    </>
  );
};

export default CustomDataGridToolbar;
