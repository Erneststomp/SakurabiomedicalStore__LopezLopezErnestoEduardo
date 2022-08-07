import './App.css';
import Shopprovider from './components/Context/context';
import MainNav from './components/Navigation/MainNav';



function App() {
  
  return (
    <Shopprovider>
      <MainNav/>
    </Shopprovider>
  );
}

export default App;
