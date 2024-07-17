import styles from "./HeroAboutUs.module.css";
import LOCATIONICON from "../../assets/location-icon.svg";
import { TEAMMEMBERS } from "../../constants/teamMembers";
import { CATEGORIES } from "../../constants/categories";

export function HeroAboutUs() {
  const category = CATEGORIES.find((cat) => cat.id === 1);
  // Funkcja skracająca tekst na podstawie liczby słów
  const truncateTextByWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  // Maksymalna liczba słów przed dodaniem 'czytaj więcej'
  const wordLimit = 300;
  const shortDescription = truncateTextByWords(category.description, wordLimit);

  return (
    <div className={styles.rightDiv}>
      {/* <div className={styles.location}>
        <img src={LOCATIONICON} alt="LocationDotIcon"></img>
        <a
          target="_blank"
          href="https://www.google.pl/maps/place/in.motion/@50.3120921,18.925124,17z/data=!3m1!4b1!4m6!3m5!1s0x4716d3f81385df47:0x9ceed8850cf2d68b!8m2!3d50.3120887!4d18.9276989!16s%2Fg%2F11l721ttwh?entry=ttu"
        >
          Ślęzan 27/II, 41-608, Świętochłowice
        </a>
      </div> */}
      <div className={styles.aboutUs}>
        <div className={styles.membersContainer}>
          <h2>{category.title}</h2>
        </div>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      </div>
    </div>
  );
}
