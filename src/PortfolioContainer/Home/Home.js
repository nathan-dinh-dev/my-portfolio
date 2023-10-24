import styles from "./Home.module.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
