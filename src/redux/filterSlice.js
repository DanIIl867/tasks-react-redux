import {createSlice} from "@reduxjs/toolkit";

const initialState = {status: "all"}

export const filterSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setStatusFilter(state, action){
            state.status=action.payload
        }
    }
}) 

export const {setStatusFilter}= filterSlice.action
export const filtersreducer = filterSlice.reducer