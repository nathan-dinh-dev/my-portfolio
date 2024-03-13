import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import styles from "./Testimonial.module.css";
import { useEffect } from "react";

import { daniel_nguyen, richard_pham } from "../../assets/Testimonial";
import WaveBackground from "../../assets/wave-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="fade-in" id={props.id || ""}>
      <ScreenHeading
        title="Testimonial"
        subHeading="What My Co-workers Say About Me"
      />

      <section className={`${styles["testimonial-section"]}`}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["testi-comment"]}>
                    <p>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className={styles["fa-quote-left"]}
                      />
                      Nathan is a dedicated team player known for his attention
                      to detail and problem-solving skills. Always ready to
                      assist his colleagues, he brings positive energy to the
                      workplace with his cheerful demeanor. His commitment to
                      excellence shines through in all he does.
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className={styles["fa-quote-right"]}
                      />
                    </p>
                    <ul className={`stars list-unstyled ${styles["stars"]}`}>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStarHalfAlt}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-info-img-block"]}>
                      <img
                        src={daniel_nguyen}
                        alt="no internet connection"
                      ></img>
                    </div>
                    <div className={styles["client-info-details"]}>
                      <h5>Daniel Nguyen</h5>
                      <p>Senior Mechanical Engineering</p>
                      <p>Lockheed Martin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["testi-comment"]}>
                    <p>
                      <FontAwesomeIcon
                        className={styles["fa-quote-left"]}
                        icon={faQuoteLeft}
                      />
                      Nathan is a focused and supportive team member, renowned
                      for his problem-solving abilities and positive attitude.
                      His dedication to excellence is evident in every task he
                      undertakes, and his willingness to help others makes him a
                      valued asset to the team.
                      <FontAwesomeIcon
                        className={styles["fa-quote-right"]}
                        icon={faQuoteRight}
                      />
                    </p>
                    <ul className={`stars list-unstyled ${styles["stars"]}`}>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStar}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faStarHalfAlt}
                          color="tomato"
                          size="xs"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-info-img-block"]}>
                      <img
                        src={richard_pham}
                        alt="no internet connection"
                      ></img>
                    </div>
                    <div className={styles["client-info-details"]}>
                      <h5>Richard Pham</h5>
                      <p>Senior Software Engineer</p>
                      <p>AT&T</p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className={styles["footer-svg"]}>
        <WaveBackground />
      </div>
    </div>
  );
};

export default Testimonial;
