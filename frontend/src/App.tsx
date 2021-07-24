import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movie from 'pages/Movie';


const  App = () =>{
  return (
    <div>
      <Navbar/>
      <Movie/>
    </div>
  );
}

export default App;
