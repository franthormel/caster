import { createAction, props } from '@ngrx/store';

export const staticDataModeChange = createAction(
  '[Static Data] File Update',
  props<{ file: number }>()
);
