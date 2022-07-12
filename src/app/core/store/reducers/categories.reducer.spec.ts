import * as initialState from '../state/categories.state';
import { LoadCategory, LoadCategorySuccess, LoadCategoryFailed } from '../actions/categories.action';
import { categoriesReducer } from './categories.reducer';

let categories = ['Cat1', 'Cat2', 'Cat3', 'Cat4'];
let error = ['test-error'];
let load = ['test-load'];
const { initialCategories } = initialState;
describe('CategoriesReducer', () => {
    describe('Actions', () => {
        it('Load Category', () => {
            const action = new LoadCategory(load);
            const state = categoriesReducer(initialCategories, action);
            expect(state.isLoading).toEqual(true);
            expect(state).toEqual({ data: [], isLoading: true, err: [] })
        });
        it('Load Category Success', () => {
            const action = new LoadCategorySuccess(categories);
            const state = categoriesReducer(initialCategories, action);
            expect(state.isLoading).toEqual(false);
            expect(state.data).toEqual(categories);
            expect(state.err).toEqual([]);
            expect(state).toEqual({ data: categories, isLoading: false, err: [] })
        });
        it('Undefined', () => {
            const action: any = [];
            const state = categoriesReducer(undefined, action);
            expect(state).toEqual(initialCategories);
            expect(state).toEqual({ data: [], isLoading: false, err: [] })
        });
    });
});