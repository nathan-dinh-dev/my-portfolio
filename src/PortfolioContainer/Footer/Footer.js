import React from "react";
import styles from "./Footer.module.css";
import ScrollService from "../../utilities/ScrollService";

const Footer = () => {
  return (
    <div className={styles["scroll-container"]}>
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Footer;
