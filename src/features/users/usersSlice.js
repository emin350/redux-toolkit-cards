import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Emin' },
    { id: '1', name: 'Abdullah' },
    { id: '2', name: 'M.kerim' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer