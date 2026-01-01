import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import Accordion from "./components/accordion/Accordion";
import RandomColorGenerator from "./components/random-color-generator/RandomColorGenerator";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="random-color" element={<RandomColorGenerator />} />
      <Route path="star-rating" element={<StarRating />} />
      <Route path="image-slider" element={<ImageSlider />} />
      <Route path="load-more-data" element={<LoadMoreData />} />
    </Routes>
  );
}

export default App;
