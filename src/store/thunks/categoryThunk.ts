import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {ApiCategory, CategoryInfo, CategoryList} from "../../types.ts";

export const fetchCategories = createAsyncThunk<CategoryInfo[], void>(
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
);

export const getOneCategoryById = createAsyncThunk<ApiCategory | null, string>(
    'categories/getOneCategoryById',
    async (categoryId: string) => {
        const response = await axiosApi<ApiCategory | null>(`/categories/${categoryId}.json`);
        if(!response.data) return null;

        return response.data
    }
);

export const changeCategory = createAsyncThunk<void, {categoryId: string, category: ApiCategory}>(
    '/categories/changeCategory',
    async({categoryId, category}) => {
        await axiosApi.put(`/categories/${categoryId}.json`, {...category})
    }
);

export const deleteCategory = createAsyncThunk(
    'categories/deleteCategory',
    async(categoryId: string) => {
        await axiosApi.delete(`/categories/${categoryId}.json`);
    }
)