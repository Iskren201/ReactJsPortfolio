import './index.css';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import SocialLinks from './components/SocialLinks/SocialLinks';
import About from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Experience } from './components/Experience/Experience';
import Contact from './components/Contact/Contact';


function App() {


    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />


            <SocialLinks />
        </div>
    );
}

export default App;
