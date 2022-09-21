import React from 'react';

export default function TituloPrincipal({ tituloProps }) {
  
  const titulo = tituloProps ?? "Olá, mundo!";

  return <h1>{titulo}</h1>; 
}
