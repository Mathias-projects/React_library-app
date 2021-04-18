import React from 'react';

class BookDetail extends React.Component {

  render() {
    console.log(this.props.author);
    console.log(this.props.book);
    console.log(this.props.cover);
    return (
      <div className="container text-center">
        <h1>{this.props.book.title}</h1>
        <h3> {this.props.author.name}</h3>
        <div className="row py-4 px-4">
        <div className="col-6">
          <img src={'http://covers.openlibrary.org/b/id/' + this.props.cover + '-M.jpg'} alt="" className="img-fluid"></img>  
        </div>
          <div className="col-6">{this.props.book.description}</div>
        </div>
        
      </div>
    );
  }
  
}

export default BookDetail;