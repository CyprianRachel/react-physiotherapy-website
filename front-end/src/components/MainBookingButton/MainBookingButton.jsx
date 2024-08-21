import { useEffect } from "react";
import styles from "./MainBookingButton.module.css";

export function MainBookingButton() {
  useEffect(() => {
    // Tworzymy element <script>
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://booksy.com/widget/code.js?id=119503&country=pl&lang=pl";
    script.async = true;

    // Dodajemy skrypt do kontenera w dokumencie
    document.getElementById("booking-container").appendChild(script);

    // Opcjonalnie, usuwamy skrypt po demontażu komponentu
    return () => {
      document.getElementById("booking-container").removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="booking-container"></div>
    </div>
  );
}
