import { initialCategories } from '../state/categories.state';
import { CategoryActions, ECategories } from '../actions/categories.action';

export function categoriesReducer(state = initialCategories, action: CategoryActions) {
    switch (action.type) {
        case ECategories.LOAD_CATEGORY: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ECategories.LOAD_CATEGORY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        }
        case ECategories.LOAD_CATEGORY_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default:
            return state;
    }
}