import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const root = combineReducers(categoriesReducer, bookReducer);
const store = createStore(root);
export default store;
