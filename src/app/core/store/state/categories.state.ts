export interface ICategories {
    data: any[],
    isLoading: boolean,
    err: any
}

export const initialCategories: ICategories = {
    data: [],
    isLoading: false,
    err: []
}