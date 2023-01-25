import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
        <div className="App">
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
  );
}

export default App;