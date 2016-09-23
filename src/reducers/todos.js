import Constants from '../constants';

export const initialState = {
  todos: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state;
  }
}
