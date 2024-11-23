import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category} from "../../types.ts";
import {fetchCategories} from "../thunks/categoryThunk.ts";

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
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchCategories.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                })
            .addCase(
                fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
                    state.isLoading = false
                    state.category = action.payload
                })
            .addCase(
                fetchCategories.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
    }
})

export const categoryReducer = categorySlice.reducer