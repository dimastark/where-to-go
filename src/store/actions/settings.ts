import { PlaceCategory } from '../../../shared/places-api';
import { createAction } from '../../services/action';

export enum SettingsActionType {
    SET_CATEGORY = 'SET_CATEGORY',
    SET_RADIUS = 'SET_RADIUS',
}

export const setCategory = (category: PlaceCategory) =>
    createAction(SettingsActionType.SET_CATEGORY, { category });

export const setRadius = (radius: number) =>
    createAction(SettingsActionType.SET_RADIUS, { radius });

export type SetCategoryAction = ReturnType<typeof setCategory>;
export type SetRadiusAction = ReturnType<typeof setRadius>;

export type SettingsAction =
    SetCategoryAction |
    SetRadiusAction;
