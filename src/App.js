import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/h1" element={<h1>hi</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
