import React from "react";
import styles from "./Footer.module.css";
import ScrollService from "../../utilities/ScrollService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <div className={`${styles["scroll-container"]} ${props.className}`}>
      <button
        className={`btn-scroll ${styles["btn-scroll"]}`}
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        <FontAwesomeIcon icon={faArrowUp} className={styles.icon} />{" "}
      </button>
    </div>
  );
};

export default Footer;
