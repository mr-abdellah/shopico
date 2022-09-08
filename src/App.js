import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import BestDeals from './pages/Best_Deals/BestDeals';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best_deals" element={<BestDeals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
