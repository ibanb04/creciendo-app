import IconButton from '@mui/material/IconButton';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { setInterview } from '../../../store/slices/interview/interview.slice';

interface GeneratingInterviewDocumentProps {
    params: GridRenderCellParams;
}
const GeneratingInterviewDocument: FC<GeneratingInterviewDocumentProps> = ({ params }) => {
    const dispatch = useAppDispatch();
    return (
        <IconButton
            component={Link}
            onClick={()=>dispatch(setInterview(params.row))}
            to={`/documento-entrevista`}
        >
            <SimCardDownloadIcon />
        </IconButton>
    )
}

export default GeneratingInterviewDocument