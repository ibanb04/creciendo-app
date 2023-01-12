import IconButton from '@mui/material/IconButton';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { FC, useState } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { setInterview } from '../../../store/slices/interview/interview.slice';
import CustomModal from '../../../helpers/CustomModal';
import InterviewDocument from '../../../shared/Documents/InterviewDocument';

interface GeneratingInterviewDocumentProps {
    params: GridRenderCellParams;
}
const GeneratingInterviewDocument: FC<GeneratingInterviewDocumentProps> = ({ params }) => {
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        dispatch(setInterview(params.row))
        setOpenModal(true);
    }
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <IconButton
                onClick={handleOpenModal}
            >
                <SimCardDownloadIcon />
            </IconButton>
            <CustomModal open={openModal} handleClose={handleCloseModal} children={<InterviewDocument />} />
        </>
    )
}

export default GeneratingInterviewDocument