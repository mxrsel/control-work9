import React from 'react';
import {CategoryInfo} from "../../types.ts";
import CategoryItem from "./CategoryItem.tsx";

interface Props {
    categories: CategoryInfo[]
}

const Category: React.FC<Props>  = ({categories}) => {
    return (
        <div>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Category;