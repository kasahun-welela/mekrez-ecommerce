import "./App.css";
import Card from "./components/ReusableComponent/Card";
import Footer from "./components/ReusableComponent/Footer";

import NavigationBar from "./components/ReusableComponent/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUS from "./components/ReusableComponent/AboutUS";

import Slider from "./components/ReusableComponent/Slider";
import Login from "./components/LoginElement/Login";
import SignUp from "./components/LoginElement/SignUp";

function App() {
  return (
    <div>
      <NavigationBar />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Card />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUS />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
