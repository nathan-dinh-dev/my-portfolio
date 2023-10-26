import styles from "./Header.module.css";
import {
  TOTAL_SCREEENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptionsClasses = (index) => {
    let classes = styles["header-option"];
    if (index < TOTAL_SCREEENS.length - 1)
      classes = classes + " " + styles["header-option-seperator"];

    if (selectedScreen === index)
      classes = classes + " " + styles["selected-header-option"];

    return classes;
  };

  const getHeaderOptions = () => {
    return TOTAL_SCREEENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div
      className={styles["header-container"]}
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className={styles["header-parent"]}>
        <div
          className={styles["header-hamburger"]}
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon
            className={`header-hamburger-bars ${styles["header-hamburger-bars"]}`}
            icon={faBars}
          />
        </div>

        <div className={styles["header-logo"]}>
          <span>Nathan~</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? `${styles["header-options"]} ${styles["show-hamburger-options"]}`
              : styles["header-options"]
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Header;
