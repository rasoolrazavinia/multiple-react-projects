import { Link } from "react-router";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <Link to="/accordion">Accordion</Link>
        <Link to="/random-color">Random Color Generator</Link>
        <Link to="/star-rating">Star Rating</Link>
        <Link to="/image-slider">Image Slider</Link>
        <Link to="/load-more-data">Load More Data</Link>
      </div>
      <footer className="home-page-footer">
        <small>
          Created by{" "}
          <a href="https://github.com/rasoolrazavinia" target="_blank">
            Rasool
          </a>
        </small>
      </footer>
    </>
  );
}

export default HomePage;
