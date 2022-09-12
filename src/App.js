import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import BestDeals from './pages/Best_Deals/BestDeals';
import Wishlist from './components/wishlist/Wishlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best_deals" element={<BestDeals />} />
          <Route path="/contact" element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
