import { setInterview } from '../store/slices/interview/interview.slice';
import { setStudent } from '../store/slices/student/student.slice';
import { useAppDispatch } from '../store/useAppDispatch';

export const useResetStudentAndInterviewState = () => {
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch(setStudent(null));
        dispatch(setInterview(null));
    }

    return handleReset;
}
