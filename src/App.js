import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // facilitates component-based dynamic routing according to the needs of the app
import "bootstrap/dist/css/bootstrap.min.css"; // importing bootstrap for styling

import Foodpage from "./pages/Food.js";
import Virtualpage from "./pages/Virtual.js";
import Ecommercepage from "./pages/Ecommerce.js";
import Portfoliopage from "./pages/Portfolio.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Top from "./components/Top/Top.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Foodpage />} />
          <Route path="/virtual" element={<Virtualpage />} />
          <Route path="/ecommerce" element={<Ecommercepage />} />
          <Route path="/portfolio" element={<Portfoliopage />} />
        </Routes>
        <Top />
      </Router>
    </div>
  );
}

export default App;
