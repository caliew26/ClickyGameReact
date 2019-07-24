import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/navigation";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
