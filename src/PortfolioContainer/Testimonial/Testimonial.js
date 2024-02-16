import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import styles from "./Testimonial.module.css";

import { daniel_nguyen, richard_pham } from "../../assets/Testimonial";
import { shape_background } from "../../assets/Home";

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
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

  return (
    <>
      <ScreenHeading
        title="Testimonial"
        subHeading="What My Co-workers Say About Me"
      />

      <section
        className={`${styles["testimonial-section"]}`}
        id={props.id || ""}
      >
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
                      <i
                        className={`fa fa-quote-left ${styles["fa-quote-left"]}`}
                      />
                      abcxyz
                      <i
                        className={`fa fa-quote-right ${styles["fa-quote-right"]}`}
                      />
                    </p>
                    <ul className={`stars list-unstyled ${styles["stars"]}`}>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
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
                      <i
                        className={`fa fa-quote-left ${styles["fa-quote-left"]}`}
                      />
                      abcxyz
                      <i
                        className={`fa fa-quote-right ${styles["fa-quote-right"]}`}
                      />
                    </p>
                    <ul className={`stars list-unstyled ${styles["stars"]}`}>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
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
      <div className={styles["footer-image"]}>
        <img src={shape_background} alt="no internet connection" />
      </div>
    </>
  );
};

export default Testimonial;
