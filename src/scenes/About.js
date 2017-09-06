import React from 'react'
import withAnimation from '../hocs/withAnimation'

const About = () => (
  <div>
    <h1>About</h1>
    <p style={{ backgroundColor: 'darkcyan' }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <p style={{ backgroundColor: 'darkcyan' }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
  </div>
)

export default withAnimation(About)
