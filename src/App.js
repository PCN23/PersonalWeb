import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/projects" >
          <Projects />
        </Route>
        <Route exact path="/project/:id" >
          <ProjectDisplay />
        </Route>
        <Route exact path="/experience" > <Experience />
        </Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
