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
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const [rowId, setRowId] = useState(null);


    const handleSelectRows = (ids: any) => {
        const selectedIDs = new Set(ids);
        const selectedRows = data.filter((row) =>
            selectedIDs.has(idType === "student" ? parseInt(row.idNumber) : parseInt(row.studentId))
        );
        setSelectedRows(selectedRows?.map((row: any) => idType === "student" ? parseInt(row.idNumber) : parseInt(row.studentId)));
    };

    return (
        <Paper elevation={4}>
            <div style={{ height: 470, width: "100%" }}>
                <DataGrid
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
                        Toolbar: () => CustomDataGridToolbar(selectedRows, "Buscar "),
                    }}
                    disableColumnFilter
                    disableColumnMenu
                    disableColumnSelector
                    disableDensitySelector
                    pagination
                    checkboxSelection
                    onRowClick={(params: any) => setRowId(params.id)}
                    onSelectionModelChange={(ids) => handleSelectRows(ids)}
                />
            </div>
        </Paper>
    )
}

export default CustomDataGrid