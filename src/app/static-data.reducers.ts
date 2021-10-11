import { Action, createReducer, on } from '@ngrx/store';
import { staticDataModeChange } from './static-data.actions';

export const staticDataKey = 'staticData';

export interface StaticDataState {
  file: number;
}

export const staticDataState: StaticDataState = {
  file: 1,
};

const _staticDataReducer = createReducer(
  staticDataState,
  on(staticDataModeChange, (state, { file }) => ({
    file: file,
  }))
);

export function staticDataReducer(
  state: StaticDataState | undefined,
  action: Action
) {
  return _staticDataReducer(state, action);
}
