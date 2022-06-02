import React from "react";
import UserPage from "./container/UserPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
