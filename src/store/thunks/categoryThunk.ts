import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {ApiCategory, Category, CategoryList} from "../../types.ts";

export const fetchCategories = createAsyncThunk<Category[], void>(
    'categories/fetchCategories',
    async() => {
        const response: {data: CategoryList | null} = await axiosApi('/categories.json');
        const categoriesList = response.data;

        if(categoriesList === null) return [];

        const categories: CategoryList = categoriesList;

        const newCategory = Object.keys(categoriesList).map((category) => {
            return {
                ...categories[category],
                id: category
            };
        });
        return newCategory

    }
);

export const createdCategory = createAsyncThunk<void, ApiCategory>(
    'categories/createdCategory',
    async(category) => {
        await axiosApi.post('/categories.json', {...category})
    }
)