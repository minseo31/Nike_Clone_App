import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Product from "./pages/product/ProductPage";
import Menber from "./pages/member/MemberPage";
import ErrorPage from "./pages/ErrorPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/member" element={<Menber />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
