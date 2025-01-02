import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
    {/*NavBar stays outside, always visible */}
    <NavigationBar />
    <Routes>
      <Route path="/" element={<div>Home content goes here!</div>} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <div className="Homepage"></div>
    </BrowserRouter>
  );
}

export default App;
