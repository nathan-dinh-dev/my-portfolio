import React from "react";
import styles from "./Footer.module.css";
import ScrollService from "../../utilities/ScrollService";

const Footer = (props) => {
  return (
    <div className={`${styles["scroll-container"]} ${props.className}`}>
      <button
        className={`btn-scroll ${styles["btn-scroll"]}`}
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Footer;
