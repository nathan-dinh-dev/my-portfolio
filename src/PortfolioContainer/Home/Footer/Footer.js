import styles from "./Footer.module.css";
import { shape_background } from "../../../assets/Home";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-parent"]}>
        {/* <img src={shape_background} alt="shape background image" /> */}
        <svg
          className={styles["svg"]}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          width="2000"
          height="130"
          preserveAspectRatio="none"
          viewBox="0 0 1440 130"
        >
          <g mask='url("#SvgjsMask1102")' fill="none">
            <path
              d="M 0,25 C 96,43.2 288,115.2 480,116 C 672,116.8 768,31.4 960,29 C 1152,26.6 1344,89 1440,104L1440 130L0 130z"
              fill="rgba(255, 255, 255, 1)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1102">
              <rect width="2000" height="130" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
