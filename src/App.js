import Main from "./Main";
import "./App.css";
import React from "react";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Main defaultCity="Krakow" />
      <Footer />
    </div>
  );
}

export default App;
