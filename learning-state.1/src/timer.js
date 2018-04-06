'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
    }

    this.timer;
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate timer', this.state, nextState)
    return this.state.time !== nextState.time
  }

  componentWillUpdate (nextProps, nextState) {
    // Não pode utilizar o this.setState neste ponto pois já via ser renderizado
    console.log('componentWillUpdate timer', this.props, nextProps)

  }

  componentDidUpdate (prevProps, prevState) {
    // Quando o componente autalizou
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  componentDidMount () {
    // Este cara fica executando e tentando renderizar o componente mesmo não listado na tela.
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    console.log('render timer')
    return (
      <div> Timer: {this.state.time} </div>
    )
  }
}

export default Timer
