import React from 'react'
import Link from 'react-router-dom/Link'
import './styles.css'

export default ({ children }) => (
  <div>
    <h1>React Router Animated Transitions</h1>
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
    <div className='pages'>
      {children}
    </div>
  </div>
)
