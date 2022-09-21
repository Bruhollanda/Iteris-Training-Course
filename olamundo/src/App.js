import TituloPrincipal from './components/TituloPrincipal';
import OutroTitulo from './components/OutroTitulo';

import './App.css';

function App() {
  return (
    <div className="App">
      <TituloPrincipal tituloProps = "titulo 1" />
      <OutroTitulo tituloProps = "titulo 2" />
    </div>
  );
}

export default App;
