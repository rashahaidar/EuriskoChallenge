import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name: 'user',
    initialState:{
        token:null
    },
    reducers:{
        login:(state,action)=>{
            state.token=action.payload.token;
            return state
        },
        logout:(state)=>{
            state.user=null;
        }   
    }
})

export const {login,logout}=userSlice.actions


export default userSlice.reducer