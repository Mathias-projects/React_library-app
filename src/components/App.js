import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import BookDetailContainer from './BookDetail/BookDetailContainer';
import IndexContainer from './IndexContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={IndexContainer} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/book/:key/:id" component={BookDetailContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;