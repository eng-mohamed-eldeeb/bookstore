import { createStore, combineReducers } from 'redux';
import categories from './categories/categories';
import books from './books/books';

const root = combineReducers({ categories, books });
const store = createStore(root);
export default store;
