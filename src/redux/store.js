import {configureStore} from "@reduxjs/loolkit";
import { taskReducer } from './taskSlice';
import { filtersReducer } from "./filterSlice";




export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filters: filtersReducer
    },
})