import { createSlice } from "@reduxjs/toolkit";


const errorSlice = createSlice({
    name: 'error',
    initialState: {
        label: ''
    },
    reducers: {
        setError:(state, action) => {
            state.label = 'Unauthorized'
            return state
        },
        clearError:(state, action) => {
            state.label = ''
            return state
        }
    }
})

export default errorSlice.reducer
export const {setError, clearError} = errorSlice.actions