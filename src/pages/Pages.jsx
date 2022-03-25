import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";

function Pages() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
    </div>
  );
}

export default Pages;
