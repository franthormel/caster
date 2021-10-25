import { createAction, props } from '@ngrx/store';

export const staticFileUpdate = createAction(
  '[Static Data] File Update',
  props<{ file: number }>()
);
