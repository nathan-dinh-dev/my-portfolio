import styles from "./Home.module.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = (props) => {
  return (
    <div className={styles["home-container"]} id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
