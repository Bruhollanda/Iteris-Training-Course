import React, { useState } from 'react';

export default function TituloPrincipal({ propsTitle }) {
  const [getTitle, setTitle] = useState(propsTitle ?? "Olá mundo");
  
  const handleClick = (event) => {
    alert("Thanks for clicking!");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <h1 onClick={ handleClick }>{ getTitle }</h1>
      <input
        type="text"
        name="text"
        onChange={ handleChangeTitle }
      />
    </>
  );
}
