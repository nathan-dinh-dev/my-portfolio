import { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import styles from "./AboutMe.module.css";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "abcxyz",
    highlights: {
      bullets: [
        "Full Stack web development",
        "Interactive Front End as per the design",
        "Redux for State Management",
        "Building Rest API",
        "Managing database",
      ],
      heading: "Here are a few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className={styles["highlight"]} key={i}>
        <div className={styles["highlight-blob"]}></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className={`${styles["about-me-container"]} screen-container fade-in`}
      id={props.id || ""}
    >
      <div className={styles["about-me-parent"]}>
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div className={styles["about-me-card"]}>
          <div className={styles["about-me-profile"]}></div>
          <div className={styles["about-me-details"]}>
            <span className={styles["about-me-description"]}>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className={styles["about-me-highlights"]}>
              <div className={styles["highlight-heading"]}>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className={styles["about-me-options"]}>
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="#">
                <button
                  className={`btn highlighted-btn ${styles["highlighted-btn"]}`}
                >
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
