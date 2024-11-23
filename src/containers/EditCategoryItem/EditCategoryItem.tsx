import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useCallback, useEffect} from "react";
import {changeCategory, getOneCategoryById} from "../../store/thunks/categoryThunk.ts";
import {ApiCategory} from "../../types.ts";
import CategoryForm from "../../components/CategoryForm/CategoryForm.tsx";

const EditCategoryItem = () => {
    const {categoryId} = useParams();
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.category.oneCategoryItem);
    const loading = useAppSelector((state) => state.category.isLoading);
    const navigate = useNavigate();

    const editingCategoryById = useCallback(async () => {
        if(categoryId) {
            dispatch(getOneCategoryById(categoryId));
        }
    }, [dispatch, categoryId]);

    useEffect(() => {
        void editingCategoryById()
    }, [editingCategoryById]);

    const editCategory = async(category: ApiCategory) => {
        if (categoryId) {
            await dispatch(changeCategory({categoryId: categoryId, category}));
            navigate('/categories')
        }
    }

    return category && (
        <div>
            <CategoryForm addNewCategory={editCategory} existingCategory={category} isLoading={loading} isEdit/>
        </div>
    );
};

export default EditCategoryItem;