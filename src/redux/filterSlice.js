// import { createSlice } from "@reduxjs/toolkit";

// const filtersInitialState  = {
//     query: "",
//     saved: 'all'
// };

// export const filterSlice = createSlice({
//     name: 'filters',
//     initialState: filtersInitialState,
//     reducers: {
//         changeFilter: (state, action) => {
//             state.query = action.payload
//         },
//         changeSavedFilter: (state, action) => {
//             state.saved = action.payload
//         }
//     },
// })

// export const {changeFilter, changeSavedFilter} = filterSlice.actions
// export const filtersReducers = filterSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState  = {
    status: "all",
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        },
    },
})

export const {changeStatus} = filterSlice.actions
export const filtersReducers = filterSlice.reducer