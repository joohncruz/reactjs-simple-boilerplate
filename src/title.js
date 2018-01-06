'use strict'

import React from 'react'

const Title = ({ name, lastname }) => (
  <h1> Olá Shun {`${name} ${lastname}!`} </h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'Sem sobrenome'
//     }
//   },
//   render: function () {
//     return (
//       <h1>Olá {this.props.name}</h1>
//     )
//   }
// })

export default Title
