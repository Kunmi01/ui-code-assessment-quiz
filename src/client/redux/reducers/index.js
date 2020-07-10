import { STORE_QUESTIONS } from '../actions/action-types';

const initialState = {
  questions: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
