import React from 'react'
import withAnimation from '../hocs/withAnimation'

const Home = () => (
  <div>
    <h1>Home</h1>
    <p style={{ backgroundColor: 'steelblue' }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
  </div>
)

export default withAnimation(Home)
