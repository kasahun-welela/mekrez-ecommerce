import "./App.css";
import Card from "./components/ReusableComponent/Card";
import Footer from "./components/ReusableComponent/Footer";
import NavigatioCatagory from "./components/ReusableComponent/NavigatioCatagory";
import NavigationBar from "./components/ReusableComponent/NavigationBar";
import Slider from "./components/ReusableComponent/Slider";

function App() {
  return (
    <div>
      <NavigationBar />
      <NavigatioCatagory />
      <Slider />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
