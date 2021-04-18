import { connect } from 'react-redux';
import { showBooksWithCovers } from '../../redux/booksFilter/actions';
import BookFilter from './BookFilter';

const mapStateToProps = (state) => {
  return {
    booksFilter: state.booksFilter
  }
};

const mapDispatchToProps = { showBooksWithCovers };
const BookFilterContainer = connect(mapStateToProps, mapDispatchToProps)(BookFilter);

export default BookFilterContainer;