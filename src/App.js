import './App.css';
import Shopprovider from 'Components/Context/Context';
import MainNav from 'Components/Navigation/MainNav';



function App() {
  
  return (
    //implementacion de vistas a traves de un componente externo al app.js
    <Shopprovider>
      <MainNav/>
    </Shopprovider>
  );
}

export default App;
