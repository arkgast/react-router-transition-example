import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Transition from 'react-transition-group/Transition'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 }
}

export const Fade = ({ in: inProp, children, ...props }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
)

export default (ComposedComponent) => {
  return class extends Component {
    render () {
      const { match, ...props } = this.props
      return (
        <TransitionGroup>
          { match && <Fade {...props}> <ComposedComponent /> </Fade> }
        </TransitionGroup>
      )
    }
  }
}
