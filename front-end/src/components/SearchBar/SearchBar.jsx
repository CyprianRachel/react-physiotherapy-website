import styles from "./SearchBar.module.css";

export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Szukaj usług..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
