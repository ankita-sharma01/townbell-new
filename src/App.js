import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SitePlans from './Pages/SitePlans';
import BackUpHome from './Components/BackUpHome';

function App() {
  return (
    <>
     <Header/>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/backup' element={<BackUpHome/>}/>
     <Route path='/about-townbell' element={<About/>}/>
     <Route path='/amayra-project' element={<SitePlans/>}/>
     <Route path='/contact-us' element={<Contact/>}/>
    </Routes>
     <Footer/>
    </>
  );
}

export default App;
