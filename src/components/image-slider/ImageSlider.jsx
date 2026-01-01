import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Footer from "../footer/Footer";
import "./ImageSlider.css";

export default function ImageSlider({
  url = "https://dog.ceo/api/breeds/image/random/",
  limit = "5",
}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currImage, setCurrImage] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  useEffect(() => {
    if (url !== "") loadImages(url);
  }, []);

  useEffect(() => {
    let timer = null;

    if (autoSlide) {
      timer = setInterval(() => {
        handleImageSlideBtn(1);
      }, 3000);
    }

    return () => clearInterval(timer);
  }, [autoSlide, currImage]);

  async function loadImages(imageUrl) {
    try {
      setIsLoading(true);

      const response = await fetch(imageUrl + limit);
      const data = await response.json();
      if (data.message) {
        setImages(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  function handleImageSlideBtn(direction) {
    const newImageIndex = currImage + direction;
    if (newImageIndex > images.length - 1) {
      setCurrImage(0);
    } else if (newImageIndex < 0) {
      setCurrImage(images.length - 1);
    } else {
      setCurrImage(currImage + direction);
    }
  }

  function handleDotClick(clickedIndex) {
    setCurrImage(clickedIndex);
  }

  if (isLoading) return <div>Loading Images</div>;

  return (
    <>
      <div className="image-slider-container">
        <BsArrowLeftCircleFill
          className="left-btn btn"
          size={25}
          onClick={() => {
            handleImageSlideBtn(-1);
          }}
        />
        {images && images.length > 0
          ? images.map((image, index) => {
              return (
                <img
                  src={image}
                  key={index}
                  className={index === currImage ? "show-image" : "hide-image"}
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          className="right-btn btn"
          size={25}
          onClick={() => {
            handleImageSlideBtn(1);
          }}
        />
        <span className="image-indicator">
          {images && images.length > 0
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      handleDotClick(index);
                    }}
                    className={
                      index === currImage
                        ? "image-indicator-btn active-image-indicator-btn"
                        : "image-indicator-btn"
                    }
                  ></button>
                );
              })
            : null}
        </span>
      </div>
      <button
        onClick={() => {
          setAutoSlide(!autoSlide);
        }}
      >
        {autoSlide ? "Disable" : "Enable"} auto slide
      </button>
      <Footer />
    </>
  );
}
