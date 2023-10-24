import styles from "./Footer.module.css";
import { shape_background } from "../../../assets/Home";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-parent"]}>
        <img src={shape_background} alt="shape background image" />
      </div>
    </div>
  );
};

export default Footer;
