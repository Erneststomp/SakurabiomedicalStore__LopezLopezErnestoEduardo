import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Itemlistcontainer greeting='Nuevo Desfibrilador' />
    </div>
  );
}

export default App;
