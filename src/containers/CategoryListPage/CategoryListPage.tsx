import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {deleteCategory, fetchCategories} from "../../store/thunks/categoryThunk.ts";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";
import Category from "../../components/Category/Category.tsx";
import {NavLink} from "react-router-dom";

const CategoryListPage = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category.category)
    const loading = useAppSelector((state) => state.category.isLoading);


    const fetchingCategoriesItem = useCallback(async() => {
        await dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        void fetchingCategoriesItem()
    }, [fetchingCategoriesItem]);

    const deletingCategory = useCallback(async (categoryId: string) => {
        await dispatch(deleteCategory(categoryId))
        await fetchingCategoriesItem()
    }, [fetchingCategoriesItem])

    return (
        <>
            <header className='d-flex justify-content-between align-items-center mb-3'>
                <h1>Categories</h1>
                <NavLink className='btn btn-dark' to='/newCategory'>Add Category</NavLink>
            </header>
            {loading ? <Spinner />
            :
            <div className='row'>
                <div className='col'>
                    {categories.length > 0 ? (
                        <Category categories={categories} deletedCategory={deletingCategory}/>
                        ) : (
                            <p>No categories yet</p>
                        )
                    }
                </div>
            </div>
            }
        </>
    );
};

export default CategoryListPage;