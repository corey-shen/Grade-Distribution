import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      {/*NavBar stays outside, always visible */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
