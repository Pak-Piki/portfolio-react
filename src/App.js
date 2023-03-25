import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import DetailsPortfolio from './components/DetailsPortfolio';
import Hero from './components/Hero';
import Project from './components/Project';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<DetailsPortfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
