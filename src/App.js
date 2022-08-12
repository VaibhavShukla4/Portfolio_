
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio1 from './components/Portfolio1';
import Experiance from './components/Experiance';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SocialLinks/>
       <About/>
       <Portfolio1/>
       <Experiance/>  
       <Contact/>
       
    </div>
  );
}

export default App;
