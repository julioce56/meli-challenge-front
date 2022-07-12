import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { categoriesReducer } from './categories.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    categories: categoriesReducer
}