import React from 'react';

class SearchForm extends React.Component {
  state = { term: '' };

  onSearchInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group row">
          <label htmlFor="search-input" className="col-sm-3 col-form-label">Search your book:</label>
          <div className="col-sm-9">
            <input type="text" id="search-input" className="form-control form-control-lg" onChange={this.onSearchInputChange}></input>
          </div>
        </div>
      </form>
    ); 
  }
}

export default SearchForm;