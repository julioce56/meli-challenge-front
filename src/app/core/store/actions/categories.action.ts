import { Action } from '@ngrx/store';

export enum ECategories {
    LOAD_CATEGORY = '[] Get Category',
    LOAD_CATEGORY_SUCCESS = '[] Get Category Success',
    LOAD_CATEGORY_FAIL = '[] Get Category Failes',
}

export class LoadCategory implements Action {
    readonly type = ECategories.LOAD_CATEGORY;
    constructor(public payload: any) {}
}

export class LoadCategorySuccess implements Action {
    readonly type = ECategories.LOAD_CATEGORY_SUCCESS;
    constructor(public payload: any[]) {}
}

export class LoadCategoryFailed implements Action {
    readonly type = ECategories.LOAD_CATEGORY_FAIL;
    constructor(public payload: any) {}
}

export type CategoryActions = LoadCategory | LoadCategorySuccess | LoadCategoryFailed;