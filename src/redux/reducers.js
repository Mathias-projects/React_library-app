import { combineReducers } from 'redux';
import { books } from './books/reducer';
import { booksFilters } from './booksFilter/reducer';
import { booksLoading } from './booksLoading/reducer';
import { booksError } from './bookError/reducer'

export default combineReducers({
  books,
  booksFilters,
  booksLoading,
  booksError
});