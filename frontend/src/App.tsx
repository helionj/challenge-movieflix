import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';


const  App = () =>{
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
