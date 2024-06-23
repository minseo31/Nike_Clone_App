import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Product from "./pages/product/ProductPage";
import Member from "./pages/member/MemberPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 공통 레이아웃 컴포넌트 */}
        <Route path="/" element={<Layout />}>
          {/* 페이지 컴포넌트 */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/member" element={<Member />} />
        </Route>
        {/* 에러 페이지 컴포넌트 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
