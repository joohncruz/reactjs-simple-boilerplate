'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
        alert('clicou')
      }}>
        <Square />
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Title name='Shunfps' />
//       </div>
//     )
//   }
// })

export default App
