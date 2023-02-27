import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import Pages from "./Pages";
import Contact from "./Contact";


function Arouting() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="pages" element={<Pages />} />
        <Route path="contact" element={<Contact />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default Arouting;