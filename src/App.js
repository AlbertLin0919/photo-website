import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
