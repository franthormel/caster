import { createAction, props } from '@ngrx/store';

// TODO Move to locaitons module
export const changeStaticFile = createAction(
  '[Static Data] File Update',
  props<{ file: number }>()
);
