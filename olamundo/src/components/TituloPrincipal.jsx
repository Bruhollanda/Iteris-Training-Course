import React, { useEffect, useState } from 'react';

export default function TituloPrincipal({ propsTitle }) {
  const [getTitle, setTitle] = useState(propsTitle ?? "Olá mundo");

  useEffect(() => {
    console.log("O título mudou."); // ação realizada quando o evento acontece
  }, [getTitle]); // "Escuta" toda vez que há alterações no "getTitle"
  
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
