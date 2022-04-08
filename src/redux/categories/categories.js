const CHECK_STATUS = 'bookStore/src/redux/categories/CHECK_STATUS';
export default function categoriesReducer(state = '', action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default: return state;
  }
}
// Actions
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
