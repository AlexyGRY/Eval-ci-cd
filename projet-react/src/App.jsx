import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <Header />
          <About />
        </div>
      </div>
      <main className="app">
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>Portfolio réalisé avec React et Vite.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
