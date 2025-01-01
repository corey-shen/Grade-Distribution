import './App.css';
import logo from './ucsc_logo.png';

function App() {
  return (
    <div className="Homepage">
      <header className="top-bar">
        <img src={logo} className="Logo" alt="UCSC Logo" />
        <h1 className="homepage-title">UC Santa Cruz Grade Distribution</h1>
        <h2 className="about">About</h2>
      </header>
    </div>

  );
}

export default App;
