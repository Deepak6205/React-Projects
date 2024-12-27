import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imgStyle.css";
import { useEffect, useState } from "react";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
        console.log(data);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchData(url);
  }, [url]);

  if (loading) {
    return <div>loading data please wait</div>;
  }
  if (errorMessage !== null) {
    return <div>Opps error occured {errorMessage}</div>;
  }
  return (
    <div id="body">
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicator">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  onClick={() => setCurrentSlide(index)}
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator hide-current-indicator"
                  }
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
