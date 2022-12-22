import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';

const CustomDataGridSkeleton = () => {
    return (
        <Stack spacing={1} padding={4}>
            <Skeleton variant="text" sx={{ fontSize: "3.5rem" }} />
            <Skeleton animation="wave" variant="rounded" height={100} />
            <Skeleton animation="wave" variant="rounded" height={180} />
        </Stack>
    )
}

export default CustomDataGridSkeleton