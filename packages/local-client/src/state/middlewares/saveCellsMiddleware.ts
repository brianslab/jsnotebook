import { Dispatch } from 'redux';

import { Action } from '../actions';
import { ActionType } from '../action_types';
import { saveCells } from '../action_creators';

export const saveCellsMiddleware = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) => {
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);
    };
  };
};
