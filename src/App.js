// client/src/App.js
import React from "react";
import Home from "./pages/home"; // Import the Home component
import "./App.css"; // Optionally, import a global stylesheet

function App() {
  return (
    <div className="App">
      <Home /> {/* Render the Home component */}
    </div>
  );
}

export default App;
