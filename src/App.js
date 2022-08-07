import './App.css';
import Shopprovider from './components/Context/context';
import MainNav from './components/Navigation/MainNav';



function App() {
  
  return (
    //implementacion de vistas a traves de un componente externo al app.js
    <Shopprovider>
      <MainNav/>
    </Shopprovider>
  );
}

export default App;
