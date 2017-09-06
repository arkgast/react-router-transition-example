import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './scenes/App'
import About from './scenes/About'
import Home from './scenes/Home'

export default () => (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </App>
  </Router>
)
