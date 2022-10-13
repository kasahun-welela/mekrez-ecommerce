import "./App.css";
import Card from "./components/ReusableComponent/Card";
import Footer from "./components/ReusableComponent/Footer";
import NavigatioCatagory from "./components/ReusableComponent/NavigatioCatagory";
import NavigationBar from "./components/ReusableComponent/NavigationBar";
import Slider from "./components/ReusableComponent/Slider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUS from "./components/ReusableComponent/AboutUS";
import Login from "./components/LoginElement/Login";

function App() {
  return (
    <div>
      <NavigationBar />
      <NavigatioCatagory />

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
          <Route path="/about" element={<AboutUS />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
