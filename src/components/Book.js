import React from 'react';
import { Link } from 'react-router-dom';

function Book(props) { 
  return (
    <div className="row m-2">
      <div className="col-2">
        <img src={'http://covers.openlibrary.org/b/id/' + props.book.cover_i + '-M.jpg'} alt="" className="img-fluid"></img>
      </div>
      <div className="col-10">
        <h2><Link to={`/book${props.book.key}`}>{props.book.title}</Link></h2>
        <p>{props.book.author_name}</p>
        <p><small>{props.book.first_publish_year}</small></p>
      </div>
    </div>
  );
}

export default Book;