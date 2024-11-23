import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import {ApiCategory} from "../../types.ts";
import {createdCategory} from "../../store/thunks/categoryThunk.ts";
import CategoryForm from "../../components/CategoryForm/CategoryForm.tsx";

const NewCategory = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loading = useAppSelector((state) => state.category.isLoading);

    const newCategoryAdded = async(category: ApiCategory) => {
        await dispatch(createdCategory(category));
        navigate('/');
    }

    return (
        <div>
            <CategoryForm addNewCategory={newCategoryAdded} isLoading={loading}/>
        </div>
    );
};

export default NewCategory;