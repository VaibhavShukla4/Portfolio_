
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio1 from './components/Portfolio1';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SocialLinks/>
       <About/>
       <Portfolio1/>
       <Experience/>  
       <Contact/>
       
    </div>
  );
}

export default App;
