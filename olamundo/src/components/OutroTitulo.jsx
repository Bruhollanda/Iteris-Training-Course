import React, { Component } from 'react'

export default class outroTitulo extends Component {
  render() {
    const titulo = this.props.tituloProps ?? "Olá, mundo!";
    return (
      <h1>{ titulo }</h1>
    )
  }
}
