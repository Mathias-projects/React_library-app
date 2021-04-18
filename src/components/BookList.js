import React from 'react';
import Book from './Book';

function BookList(props) {
  console.log(props.list);
  const list = props.list.map(book => <Book key={book.key} book={book} />);
  return (
    <div className="container">
      {list}
    </div>
  );
}

export default BookList;