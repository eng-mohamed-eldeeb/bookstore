export const ADD_BOOK = 'addBook';
export const REMOVE_BOOK = 'removeBook';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}
// Action Creators
export function bookAdded(name, id) {
  return {
    type: ADD_BOOK,
    payload: {
      name,
      id,
    },
  };
}

export function bookRemoved(id) {
  return {
    type: ADD_BOOK,
    payload: {
      id,
    },
  };
}
