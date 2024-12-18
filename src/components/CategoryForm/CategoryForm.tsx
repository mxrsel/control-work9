import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {ApiCategory, CategoryMutation} from "../../types.ts";
import Spinner from "../UI/Spinner/Spinner.tsx";

interface Props {
    addNewCategory: (category: ApiCategory) => void;
    existingCategory?: CategoryMutation;
    isLoading?: boolean
    isEdit?: boolean
}

const initialState: CategoryMutation = {
    name: '',
    type: 'income'
}

const CategoryForm: React.FC<Props> = ({addNewCategory, existingCategory = initialState, isLoading = false, isEdit}) => {
    const [newCategory, setNewCategory] = useState(existingCategory)

    const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setNewCategory((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const onHandleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(newCategory.name.trim().length === 0) {
            alert('Enter name of category!')
        } else {
            addNewCategory({
                ...newCategory,
            })
            if (!isEdit) {
                setNewCategory({
                    name: '',
                    type: 'income'
                })
            }
        }
    }

    return (
        <>
            {isLoading ? <Spinner/>
                :
                <form className='form-control' onSubmit={onHandleSubmit}>
                    <h1>{isEdit ? 'Edit' : 'Add New'} Category</h1>
                    <div className='group-form'>
                        <label htmlFor='category'>Type:
                            <select
                                id='type'
                                name='type'
                                className='form-control'
                                value={newCategory.type}
                                onChange={handleChangeCategory}
                            >
                                <option value='income'>Income</option>
                                <option value='expend'>Expend</option>
                            </select>
                        </label>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='name'>Category:
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                value={newCategory.name}
                                onChange={handleChangeCategory}
                                className='form-control'/>
                        </label>
                    </div>

                    {isEdit ?
                         <button className='btn btn-dark'>Add Category</button>
                             :
                         <button className='btn btn-dark'>Edit Category</button>}
                    <NavLink className='btn btn-danger' to='/categories'>Cancel</NavLink>
                </form>
            }
        </>
    );
};

export default CategoryForm;