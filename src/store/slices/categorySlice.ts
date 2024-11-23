import {createSlice} from "@reduxjs/toolkit";
import {Category} from "../../types.ts";

interface CategoryState {
category: Category[];
isLoading: boolean;
isError: boolean;
}

const initialState: CategoryState = {
    category: [],
    isLoading: false,
    isError: false,
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {}
})

export const categoryReducer = categorySlice.reducer