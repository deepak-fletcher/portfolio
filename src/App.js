import './App.css';
import { React, useState } from "react";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar></NavBar>
          <Routes>
            <Route
                exact
                path="/"
                element={<Home></Home>}
            ></Route>
            <Route
                exact
                path="/hobbies"
                element={<Hobbies></Hobbies>}
            ></Route>
            <Route
                exact
                path="/socials"
                element={<Socials></Socials>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
        
    </div>
  );
}

export default App;
