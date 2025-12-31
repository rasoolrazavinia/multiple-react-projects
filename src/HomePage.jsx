import { Link } from "react-router";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <Link to="/accordion">Accordion</Link>
      <Link to="/random-color">Random Color Generator</Link>
      <Link to="/star-rating">Star Rating</Link>
      <Link to="/image-slider">Image Slider</Link>
    </div>
  );
}

export default HomePage;
