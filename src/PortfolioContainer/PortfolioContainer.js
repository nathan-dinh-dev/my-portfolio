import { TOTAL_SCREEENS } from "../utilities/commonUtils";
import styles from "./PortfolioContainer.module.css";

const PorfolioContainer = () => {
  const mapAllScreens = () => {
    return TOTAL_SCREEENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return <div className={styles["portfolio-container"]}>{mapAllScreens()}</div>;
};

export default PorfolioContainer;
