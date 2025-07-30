import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import BlogDetails from './Components/BlogDetails';
import Contact from './Pages/Contact';
import SitePlans from './Pages/SitePlans';

function App() {
  return (
    <>
     <Header/>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/about-townbell' element={<About/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/projects' element={<SitePlans/>}/>
     <Route path='/contact-us' element={<Contact/>}/>
     <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
     <Footer/>
    </>
  );
}

export default App;
