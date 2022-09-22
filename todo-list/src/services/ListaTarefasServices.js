import TarefaModel from '../models/TarefaModel';

function ListaTarefasContextBuilder([
  getListaDeTarefas,
  setListaDeTarefas,
]) {
  return {
    getListaDeTarefas,
    adicionarTarefa: (tarefa) => 
      setListaDeTarefas(adicionar(getListaDeTarefas, tarefa))
  };
}

function adicionar(getListaDeTarefas, descricaoTarefa) {
  const novaTarefa = new TarefaModel(
    getListaDeTarefas.lenght + 1,
    descricaoTarefa
  );
  return [...getListaDeTarefas, novaTarefa];
}