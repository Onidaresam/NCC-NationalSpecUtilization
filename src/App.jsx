import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bands from './components/Band/Bands';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Bands />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
