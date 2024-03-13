import styles from "./ContactMe.module.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { toast } from "react-toastify";
import { loading_gif, img_back } from "../../assets/ContactMe";
import Footer from "../Footer/Footer";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [typeEffect] = useTypewriter({
    words: ["Get In Touch 📧"],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 40,
  });

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className={`${styles["main-container"]} fade-in`} id={props.id || ""}>
      <ScreenHeading title="Contact Me" subHeading="Let's Keep In Touch" />
      <div className={`${styles["central-form"]}`}>
        <div className={`col ${styles["col"]}`}>
          <h2 className="title">
            {typeEffect}
            <Cursor />
          </h2>

          <a
            href="https://www.facebook.com/profile.php?id=100004020500449"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-square" />
          </a>
          <a
            href="https://www.instagram.com/nghiadinh.h/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/dinh97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="https://github.com/nathan-dinh-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-square"></i>
          </a>
          <a href="mailto:trungnghia.dinh@sjsu.edu">
            <i className="fa fa-envelope"></i>
          </a>
        </div>

        <div className={`${styles["back-form"]}`}>
          <div className={`${styles["img-back"]}`}>
            <h4>Send Your Email Here!</h4>
            <img src={img_back} alt="image not found" />
          </div>

          <form onSubmit={formSubmitHandler} className={styles["form"]}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={nameHandler} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={emailHandler} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={messageHandler} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className={`${styles["loading"]}`}>
                    <img src={loading_gif} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer className={styles["scroll-up"]} />
    </div>
  );
};

export default ContactMe;
