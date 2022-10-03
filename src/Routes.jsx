import {
    BrowserRouter as Router, Routes, Route, Link, 
  } from 'react-router-dom';
import { Tweet } from './Tweet';
import { App } from './App';
    
export function AppRoutes() {
  return (
    <Router>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/tweet">Tweet</Link>
        </nav>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Criar Tweet" element={<Tweet />} />
        </Routes>
      </div>
    </Router>
  );
}