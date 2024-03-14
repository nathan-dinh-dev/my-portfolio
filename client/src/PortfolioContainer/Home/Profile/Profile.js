import styles from "./Profile.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ScrollService from "../../../utilities/ScrollService";

const Profile = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Enthusiastic Dev 🤜",
      "Full Stack Developer 💻",
      "MERN Stack Dev 😎",
      "Collaborative Team Player 🤝",
      "Agile Cross-Platform Developer 🔄",
    ],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-parent"]}>
        <div className={styles["profile-details"]}>
          <div className={styles.colz}>
            <div className={styles["colz-icon"]}>
              <a
                href="https://www.facebook.com/profile.php?id=100004020500449"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/nghiadinh.h/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://github.com/nathan-dinh-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/dinh97/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="mailto:trungnghia.dinh@sjsu.edu">
                <i className="fa fa-envelope"></i>
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
            <button
              className={`btn primary-btn ${styles.btn}`}
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="resume.pdf" download="Nathan Dinh Resume.pdf">
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
