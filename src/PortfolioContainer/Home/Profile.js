import styles from "./Profile.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Profile = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Enthusiastic Dev 🤜",
      "Full Stack Developer 💻",
      "MERN Stack Dev 😎",
      "Cross Platform Dev ",
      "React/React Native Dev",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-parent"]}>
        <div className={styles["profile-details"]}>
          <div className={styles.colz}>
            <div className={styles["colz-icon"]}>
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className={styles["profile-details-name"]}>
            <span className={styles["primary-text"]}>
              {" "}
              Hello, I'M{" "}
              <span className={styles["highlighted-text"]}>Nathan</span>
            </span>
          </div>

          <div className={styles["profile-details-role"]}>
            <span className={styles["primary-text"]}>
              {" "}
              <h1>
                {typeEffect}
                <Cursor />
              </h1>
              <span className={styles["profile-role-tagline"]}>
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

          <div className={styles["profile-options"]}>
            <button className={`btn primary-btn ${styles.btn}`}>
              {""}
              Hire Me{" "}
            </button>
            <a href="resume.pdf" download="resume.pdf">
              <button
                className={`btn highlighted-btn ${styles["highlighted-btn"]} ${styles.btn}`}
              >
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className={styles["profile-picture"]}>
          <div className={styles["profile-picture-background"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
