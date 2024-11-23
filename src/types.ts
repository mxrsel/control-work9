export interface CategoryInfo {
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

export interface TransactionInfo {
    id: string;
    category: string;
    amount: number;
    createdAt: string;
}

export interface TransactionMutation {
    category: string;
    amount: number;
    createdAt: string;
}

export type ApiTransaction = Omit<TransactionMutation, 'id'>;

export interface TransactionList {
    [id: string]: ApiTransaction
}