import { connect } from 'react-redux';
import { booksFetched } from '../redux/books/actions';
import { loading } from '../redux/booksLoading/actions';
import { warning } from '../redux/bookError/actions';
import { getFilteredBooks } from '../selectors/getFilteredBooks';
import Index from './Index';

const mapStateToProps = (state) => {
  return {
    books: getFilteredBooks(state.books, state.booksFilters),
    isloading: state.booksLoading,
    problem: state.booksError
  }
};

const mapDispatchToProps = { booksFetched, loading, warning};
const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);

export default IndexContainer;