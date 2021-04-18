import React from 'react';
import { compose } from 'redux';
import olApi from '../olApi';
import SearchForm from './SearchForm';
import BookList from './BookList';
import { withHandleError, withLoading } from './hoc';
import BooksFilterContainer from './BooksFilter/BookFilterContainer';

const BookListWithHandleErrorAndLoading = compose(withHandleError, withLoading)(BookList);

class Index extends React.Component {

  onSearchFormSubmit = (term) => {
    console.log('Searching:' + term);
    this.props.loading(true);
    olApi.get('search.json', {
      params: { title: term }
    }).then((response) => {
      this.props.booksFetched(response.data.docs);
      this.props.loading(false);
    }).catch((error) => {
      this.props.warning(true);
    });
  }

  
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="mt-3 pb-0 alert alert-secondary">
          <SearchForm onFormSubmit={this.onSearchFormSubmit}></SearchForm>
        </div>
        <BooksFilterContainer />
        <BookListWithHandleErrorAndLoading list={this.props.books} loading={this.props.isloading} error={this.props.problem}/>
      </div>
    );
  }
}

export default Index;