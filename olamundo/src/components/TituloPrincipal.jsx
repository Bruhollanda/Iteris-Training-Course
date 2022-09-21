import React from 'react';

export default function TituloPrincipal({ tituloProps }) {
  
  const titulo = tituloProps ?? "Olá, mundo!";
  
  const clickCallBack = (event) => {
    alert("Thanks for clicking!");
  }

  return <h1 onClick={ clickCallBack }>{titulo}</h1>; 
}
