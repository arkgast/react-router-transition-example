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
      <Route exact path='/' children={({ ...props }) => {
        return <Home {...props} />
      }} />
      <Route path='/about' children={({ ...props }) => {
        return <About {...props} />
      }} />
    </App>
  </Router>
)
