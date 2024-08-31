import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:propertyId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
