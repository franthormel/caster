import { createAction, props } from '@ngrx/store';

export const changeLocationsFile = createAction(
  '[Locations] Change file',
  props<{ file: number }>()
);
