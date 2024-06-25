import styles from "./HeroSlider.module.css";
import NEXTARROW from "../../assets/next.png";
import { useState } from "react";

export function HeroSlider({ slider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.centerDiv}>
      <div onClick={goToPrevious} className={styles.leftArrow}>
        <img className={styles.image} src={NEXTARROW} alt={NEXTARROW} />
      </div>
      <div onClick={goToNext} className={styles.rightArrow}>
        <img className={styles.image} src={NEXTARROW} alt={NEXTARROW} />
      </div>
      <div className={styles.opinionCounter}>
        <h2>5,0</h2>
        <p>44 opinie</p>
      </div>
      <div
        className={styles.slider}
        style={{ backgroundImage: `url(${slider[currentIndex]})` }}
      ></div>
      <div className={styles.pagination}>
        {slider.map((slide, slideIndex) => (
          <div
            className={styles.singleDot}
            onClick={() => goToSlide(slideIndex)}
            key={slideIndex}
          ></div>
        ))}
      </div>
    </div>
  );
}
