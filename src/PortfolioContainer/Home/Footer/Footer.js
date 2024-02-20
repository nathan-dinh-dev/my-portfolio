import styles from "./Footer.module.css";
import WaveBackground from "../../../assets/wave-svg";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-parent"]}>
        <WaveBackground className={styles["svg"]} />
      </div>
    </div>
  );
};

export default Footer;
