import styles from "./ContactMe.module.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useState } from "react";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

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

  console.log(name);

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

  return (
    <>
      <ScreenHeading title="Contact Me" subHeading="Let's Keep In Touch" />

      <div className="central-form">
        <div className="col">
          <h2 className="title"></h2>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
