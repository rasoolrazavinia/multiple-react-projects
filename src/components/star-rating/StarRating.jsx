import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Footer from "../footer/Footer";
import "./StarRating.css";

export default function StarRating({ numOfStars = 10 }) {
  const [hover, setHover] = useState(0);
  const [select, setSelect] = useState(0);

  function handleClick(currIndex) {
    setSelect(currIndex);
  }

  function handleMouseEnter(currIndex) {
    setHover(currIndex);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <>
      <div className="star-rating-container">
        {[...Array(numOfStars)].map((_, index) => {
          index++;

          return (
            <FaStar
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              onMouseEnter={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
              className={index <= (hover || select) ? "active" : "not-active"}
              size={50}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
