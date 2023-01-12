import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isModalOpen: false,
}

const modalSlice = createSlice({
    name: 'modalState',
    initialState,
    reducers: {
        setModalState(state, { payload }) {
            state.isModalOpen = payload;
        }
    }
});

export const { setModalState } = modalSlice.actions

export default modalSlice.reducer