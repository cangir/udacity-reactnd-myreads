import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import Search from './Search'


class BooksApp extends React.Component {
  render() {
    return (
      <Router basename={window.location.pathname || ''}>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
