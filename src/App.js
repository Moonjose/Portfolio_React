import './App.css'; // Css
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from './pages/Content';
import Footer from './components/Footer';

import Experience from './pages/Experience';

import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/:id' element={<ProjectDisplay />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
