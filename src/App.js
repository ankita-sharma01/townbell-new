import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Header/>
     <HomePage/>
     <Footer/>
    </div>
  );
}

export default App;
