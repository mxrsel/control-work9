import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {Category, CategoryList} from "../../types.ts";

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
)