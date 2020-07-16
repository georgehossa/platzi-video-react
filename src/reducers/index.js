import { SET_FAVORITE, REMOVE_FAVORITE } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter(item => item.id === action.payload.id).length === 0 ? [...state.myList, action.payload] : [...state.myList],
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
