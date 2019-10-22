import { ADD_PARAMS } from '../actions/action';

const initialState = {
  data: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PARAMS:
      return {
        data: [
          ...state.data,
          {
            title: action.title,
            content: action.content
          }
        ]
      };

    default:
      return state;
  };
}

export default rootReducer;