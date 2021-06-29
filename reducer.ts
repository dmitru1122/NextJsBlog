import { HYDRATE } from 'next-redux-wrapper';
import { AppState, Action, actionTypes } from './interfaces';

export const exampleInitialState: AppState = {
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  sendDataSuccess: null,
};

const reducer = (
  state = exampleInitialState,
  action: Action | { type: typeof HYDRATE; payload: AppState },
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };
    case actionTypes.SEND_DATA_SUCCESS:
      return {
        ...state,
        ...{ sendDataSuccess: action.data },
      };

    default:
      return state;
  }
};

export default reducer;
