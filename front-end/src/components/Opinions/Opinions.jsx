import styles from "./Opinions.module.css";
import { OPINIONS } from "../../constants/opinions";
import STAR from "../../assets/star-solid.svg";

export function Opinions() {
  const getServiceCountLabel = (count) => {
    // Sprawdzenie dla liczby 1
    if (count === 1) {
      return "opinia";
    }

    // Sprawdzenie dla liczb powyżej 21, które kończą się na 2, 3 lub 4, z wyjątkiem tych kończących się na 12, 13, 14
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    if (
      count > 21 &&
      (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) &&
      !(lastTwoDigits === 12 || lastTwoDigits === 13 || lastTwoDigits === 14)
    ) {
      return "opinie";
    }

    // Sprawdzenie dla liczb 2, 3, 4, z wyjątkiem tych kończących się na 12, 13, 14
    if (
      (count === 2 || count === 3 || count === 4) &&
      !(lastTwoDigits === 12 || lastTwoDigits === 13 || lastTwoDigits === 14)
    ) {
      return "opinie";
    }

    // Domyślne
    return "opinii";
  };

  return (
    <div className={styles.wrapper} id="opinie">
      <div className={styles.wrapperOpinions}>
        {OPINIONS.map((opinion) => (
          <div key={opinion.id} className={styles.opinionWrapper}>
            <div className={styles.imageWrapper}>
              <img src={opinion.image} className={styles.image} />
            </div>
            <div className={styles.averageCounterWrapper}>
              <div className={styles.starAverage}>
                <img src={STAR} className={styles.starIcon} />
                <span className={styles.average}>{opinion.average}</span>
              </div>
              <span className={styles.counter}>
                {opinion.counter} {getServiceCountLabel(opinion.counter)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
