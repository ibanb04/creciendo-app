import { useMemo, useState } from "react";
import { debounce } from "@mui/material/utils";
import { TextField, InputAdornment } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
    GridToolbarContainer,
    useGridApiContext,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
const CustomDataGridToolbar = (selectedRows: []) => {
    const apiRef = useGridApiContext();
    const [searchValue, setSearchValue] = useState("");

    const updateSearchValue = useMemo(() => {
        return debounce((newValue) => {
            apiRef.current.setQuickFilterValues(
                newValue.split(" ").filter((word: string) => word !== "")
            );
        }, 500);
    }, [apiRef]);

    const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSearchValue(newValue);
        updateSearchValue(newValue);
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

                {selectedRows.length > 0 ? (

                    <Typography variant="subtitle1"  >
                        {selectedRows.length} seleccionados
                    </Typography>
                ) : (
                    <GridToolbarContainer >
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                value={searchValue}
                                size="small"
                                variant="standard"

                                onChange={handleSearchValueChange}
                                label="Buscar estudiante"
                            />
                        </Box>
                    </GridToolbarContainer>
                )
                }

                {selectedRows.length > 0 ? (
                    <IconButton aria-label="delete"  >
                        <DeleteIcon />
                    </IconButton>
                ) : null
                }

            </Stack>
        </>
    );
}

export default CustomDataGridToolbar