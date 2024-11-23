import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApiCategory, CategoryInfo} from "../../types.ts";
import {changeCategory, createdCategory, fetchCategories, getOneCategoryById} from "../thunks/categoryThunk.ts";

interface CategoryState {
category: CategoryInfo[];
oneCategoryItem: ApiCategory | null
isLoading: boolean;
isError: boolean;
}

const initialState: CategoryState = {
    category: [],
    oneCategoryItem: null,
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
                fetchCategories.fulfilled, (state, action: PayloadAction<CategoryInfo[]>) => {
                    state.isLoading = false
                    state.category = action.payload
                })
            .addCase(
                fetchCategories.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                createdCategory.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                })
            .addCase(
                createdCategory.fulfilled, (state) => {
                    state.isLoading = false
                })
            .addCase(
                createdCategory.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                getOneCategoryById.pending, (state) => {
                    state.isLoading = true;
                    state.oneCategoryItem = null
                    state.isError = false
                })
            .addCase(
                getOneCategoryById.fulfilled, (state, action: PayloadAction<ApiCategory | null>) => {
                    state.isLoading = false
                    state.oneCategoryItem = action.payload
                })
            .addCase(
                getOneCategoryById.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
            .addCase(
                changeCategory.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false
                })
            .addCase(
                changeCategory.fulfilled, (state) => {
                    state.isLoading = false
                    state.oneCategoryItem = null
                })
            .addCase(
                changeCategory.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                })
    }
})

export const categoryReducer = categorySlice.reducer