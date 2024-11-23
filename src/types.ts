export interface Category {
    id: string;
    name: string;
    type: 'income' | 'expense';
}

export interface CategoryMutation {
    name: string;
    type: 'income' | 'expense';
}

export type ApiCategory = Omit<CategoryMutation, 'id'>;

export interface CategoryList {
    [id: string]: ApiCategory
}