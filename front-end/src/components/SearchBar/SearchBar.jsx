import styles from "./SearchBar.module.css";
import SEARCH from "../../assets/magnifying-glass-solid.svg";

export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.searchContainer}>
      <label htmlFor="searchInput" className={styles.searchLabel}>
        <img src={SEARCH} alt="Search Icon" className={styles.searchIcon} />
      </label>
      <input
        id="searchInput"
        className={styles.input}
        type="text"
        placeholder="Szukaj usług..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
