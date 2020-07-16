import { SET_FAVORITE, REMOVE_FAVORITE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
