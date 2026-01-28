import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bands from './components/Band/Bands';
import About from './components/Aboutus/About';
//import Faqs from './components/FAQs/Faqs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Bands />} />
          <Route path="/aboutus" element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}
export default App;
