import { useAppDispatch, useAppSelector } from '../store/useAppDispatch';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/slices/auth/auth.slice';

export const useCheckAuth = () => {
    const { status } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout( { code: '' } ));
            const { displayName, photoURL, uid } = user;
            dispatch(login({ displayName, photoURL, uid }));
        })

    }, [dispatch]);
    return status;
}