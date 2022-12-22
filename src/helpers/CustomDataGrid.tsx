import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState, FC } from 'react';
import CustomDataGridToolbar from './CustomDataGridToolbar';
import Checkbox from '@mui/material/Checkbox';
import { Paper } from '@mui/material';

interface CustomDataGridProps {
    columns: GridColDef[];
    data: any[];
    idType: string;
}

const CustomDataGrid: FC<CustomDataGridProps> = ({ columns, data, idType }) => {
    const [pageSize, setPageSize] = useState(5);

    return (
        <Paper
            style={{
                boxShadow: "0 10px 24px 0 rgba(128,128,128, 0.5)",
            }}
        >
            <div style={{ height: 470, width: "100%" }}>
                <DataGrid
                    sx={{
                        border: 0,
                        px: 2,

                    }}
                    columns={columns}
                    rows={data}
                    getRowId={idType === "student" ? (row) => parseInt(row.idNumber) : (row) => parseInt(row.studentId)}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    components={{
                        BaseCheckbox(props) {
                            return <Checkbox {...props} color="secondary" />;
                        },
                        Toolbar: () => CustomDataGridToolbar("Buscar "),
                    }}
                    disableColumnFilter
                    disableColumnMenu
                    disableColumnSelector
                    disableDensitySelector
                    pagination
                    disableSelectionOnClick
                />
            </div>
        </Paper>
    )
}

export default CustomDataGrid