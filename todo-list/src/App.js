import "./App.css";
import React, { useState } from "react";
import ListaTarefasContext from "./services/ListaTarefas/ListaTarefasContext";
import { listaTarefasContextBuilder } from "./services/ListaTarefas/ListaTarefasServices";

function App() {
  // inicializa o objeto que vamos compartilhar
  const controleDeTarefas = listaTarefasContextBuilder(useState([]));
  return (
    <div className="App">
      <div className="App">
        <ListaTarefasContext.Provider value={controleDeTarefas}>
          <div>
            Todos os componentes aqui dentro vão pode acessar o contexto
          </div>
        </ListaTarefasContext.Provider>
      </div>
    </div>
  );
}

export default App;
