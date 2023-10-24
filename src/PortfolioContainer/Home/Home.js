import styles from "./Home.module.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
