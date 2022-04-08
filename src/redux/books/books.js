import { v4 } from 'uuid';

export const ADD_BOOK = 'bookStore/src/redux/book/ADD_BOOK';
export const REMOVE_BOOK = 'bookStore/src/redux/book/REMOVE_BOOK';
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: v4(),
          author: action.payload.author,
          name: action.payload.name,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
}
// Action Creators
export function bookAdded(name, author) {
  return {
    type: ADD_BOOK,
    payload: {
      name,
      author,
    },
  };
}

export function bookRemoved(id) {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  };
}
