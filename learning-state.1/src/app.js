'use strict'

import React, { Component } from 'react'
import Time from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      showTimer: true,
    }
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    // Usado para fazer manipulação de dom com libs externas pelo fato do componente já ter renderizado.
    console.log('componentDidMount app')
  }

  render () {
    console.log('render')
    return (
      <div>

        { this.state.showTimer && <Timer time={this.state.time}/> }

        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}> Show / hide time </button>

        <br />

        <button onCLick={() => {
          this.setState({ time: this.state.time + 10 })
        }}> Change props </button>

      </div>
    )
  }
}

export default App
