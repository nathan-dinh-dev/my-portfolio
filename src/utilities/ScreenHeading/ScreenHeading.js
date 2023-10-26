import styles from "./ScreenHeading.module.css";

const ScreenHeading = (props) => {
  return (
    <div className={styles["heading-container"]}>
      <div className={styles["screen-heading"]}>
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className={styles["screen-sub-heading"]}>
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles["heading-seperator"]}>
        <div className={styles["seperator-line"]}></div>
        <div className={styles["seperator-blob"]}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
