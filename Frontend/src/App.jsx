import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testing from "./pages/Test";
// import Card from './components/Card'

function App() {
  return (
    <>
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Testing />} />
          </Routes>
        </BrowserRouter>
      </header>
      <main></main>
    </>
  );
}

export default App;
