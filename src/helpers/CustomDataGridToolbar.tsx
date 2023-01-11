import { useMemo, useState } from "react";
import { debounce } from "@mui/material/utils";
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import {
    GridToolbarContainer,
    useGridApiContext,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
const CustomDataGridToolbar = (label: string) => {
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
                <GridToolbarContainer >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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
                <IconButton aria-label="refresh" onClick={handleRefresh} >
                    <ReplayIcon />
                </IconButton>
            </Stack>
        </>
    );
}

export default CustomDataGridToolbar