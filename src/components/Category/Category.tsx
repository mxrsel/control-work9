import React from 'react';
import {CategoryInfo} from "../../types.ts";
import CategoryItem from "./CategoryItem.tsx";

interface Props {
    categories: CategoryInfo[]
    deletedCategory: (categoryId: string) => void;
}

const Category: React.FC<Props>  = ({categories, deletedCategory}) => {
    return (
        <div>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} onDelete={() => deletedCategory(category.id)}/>
            ))}
        </div>
    );
};

export default Category;