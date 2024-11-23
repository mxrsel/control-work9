import React from 'react';
import {CategoryInfo} from "../../types.ts";
import {NavLink} from "react-router-dom";

interface Props {
    category: CategoryInfo
}

const CategoryItem: React.FC<Props> = ({category}) => {
    return (
        <div className='categoryCard container text-light d-flex justify-content-between align-items-center mb-2 p-3 bg-dark ms-auto me-auto' style={{borderRadius: '10px'}}>
            <h2>{category.name}</h2>

            <div className='d-flex justify-content-between align-items-center'>
                <h3>{category.type}</h3>
                <NavLink className='btn btn-success' to={`/editCategory/${category.id}`}>Edit</NavLink>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default CategoryItem;

