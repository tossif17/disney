import "./App.css";
import { React } from "react";
import Header from "./assets/Componenets/Header";
import Slider from "./assets/Componenets/Slider";
import ProductHouse from "./assets/Componenets/ProductHouse";
import GeneralList from "./Constant/GeneralList";
import GeneralMoviList from "./assets/Componenets/GeneralMoviList";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductHouse />
      <GeneralMoviList />
    </>
  );
}

export default App;
