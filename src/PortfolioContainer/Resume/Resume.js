import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useState, useEffect } from "react";
import styles from "./Resume.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  education_svg,
  experience_svg,
  interests_svg,
  projects_svg,
  skills_svg,
} from "../../assets/Resume";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className={styles["resume-heading"]}>
        <div className={styles["resume-main-heading"]}>
          <div className={styles["heading-bullet"]}></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className={styles["heading-date"]}>
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className={styles["resume-sub-heading"]}>
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>

        <div className={styles["resume-heading-description"]}>
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: education_svg },
    { label: "Work History", logoSrc: experience_svg },
    { label: "Programming Skills", logoSrc: skills_svg },
    { label: "Projects", logoSrc: projects_svg },
    { label: "Interests", logoSrc: interests_svg },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "C/C++", ratingPercentage: 75 },
    { skill: "Python", ratingPercentage: 75 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 70 },
    { skill: "HTML/CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: (
        <span>
          Personal Portfolio Website{" "}
          <a
            href="https://github.com/nathan-dinh-dev/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="md" />
          </a>
        </span>
      ),
      duration: { fromDate: "Dec 2020", toDate: "Feb 2021" },
      description: (
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>{" "}
          |{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Video Demo
          </a>
        </span>
      ),
      subHeading:
        "Technology Used: React, Express, RxJs, NodeMailer, Bootstrap",
    },
    {
      title: (
        <span>
          Food Order Application{" "}
          <a
            href="https://github.com/nathan-dinh-dev/food-order-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="md" />
          </a>
        </span>
      ),
      duration: { fromDate: "Jun 2023", toDate: "May 2024" },
      description: (
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>{" "}
          |{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Video Demo
          </a>
        </span>
      ),
      subHeading: "Technology Used: React, MySQL, Stripe, Strapi, Docker",
    },
    {
      title: (
        <span>
          City of Williamston Website{" "}
          <a
            href="https://github.com/nathan-dinh-dev/city-of-williamston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="md" />
          </a>
        </span>
      ),
      duration: { fromDate: "Oct 2023", toDate: "Dec 2023" },
      description: (
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>{" "}
          |{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Video Demo
          </a>
        </span>
      ),
      subHeading:
        "Technology Used: React, Bootstrap, NodeMailer, Express, Docker",
    },
    {
      title: (
        <span>
          DevMint Market{" "}
          <a
            href="https://github.com/nathan-dinh-dev/devmint_market"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      ),
      duration: { fromDate: "Oct 2022", toDate: "Dec 2022" },
      description: (
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>{" "}
          |{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Video Demo
          </a>
        </span>
      ),
      subHeading:
        "Technology Used: React, Framer Motion, Howler, Express, Docker",
    },
  ];

  const resumeDetails = [
    <div className={styles["resume-screen-container"]} key="education">
      <ResumeHeading
        heading={"San Jose State University"}
        subHeading="Bachelor of Science"
        description="Software Engineering"
        fromDate="2023"
        toDate="Expected 2025"
      />
      <ResumeHeading
        heading={"Bach Khoa University, Vietnam"}
        subHeading="Bachelor of Science"
        description="Electrical Engineering"
        fromDate="2015"
        toDate="2019"
      />
      <ResumeHeading
        heading={"De Anza College"}
        subHeading="Associate of Science"
        description="Computer Science"
        fromDate="2021"
        toDate="2022"
      />
    </div>,

    <div className={styles["resume-screen-container"]} key="work-experience">
      <div className={styles["experience-container"]}>
        <ResumeHeading
          heading={"Pho Ha Noi"}
          subHeading="IT Specialist"
          fromDate="2021"
          toDate="present"
        />
        <div className={styles["experience-description"]}>
          <ul className={styles["resume-description-text"]}>
            <li>
              Integrated and troubleshoot POS systems to resolve technical
              issues promptly and minimize downtime.
            </li>
            <li>
              Implemented automated inventory management and order processing
              systems.
            </li>
            <li>Experienced in network management and troubleshooting.</li>
            <li>
              Managed restaurant website, overseeing menu updates, promotions,
              and newsletter distribution to customers.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["experience-container"]}>
        <ResumeHeading
          heading={"De Anza College"}
          subHeading="Tutor"
          fromDate="06/2022"
          toDate="09/2022"
        />
        <div className={styles["experience-description"]}>
          <ul className={styles["resume-description-text"]}>
            <li>Assisted students with programming and software questions.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div
      className={`${styles["resume-screen-container"]} ${styles["programming-skills-container"]}`}
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className={styles["skill-parent"]} key={index}>
          <div className={styles["heading-bullet"]}></div>
          <span>{skill.skill}</span>
          <div className={styles["skill-percentage"]}>
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className={styles["active-percentage-bar"]}
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className={styles["resume-screen-container"]} key="projects">
      {projectsDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className={styles["resume-screen-container"]} key="interests">
      <ResumeHeading
        heading="Sports"
        description="Passionate about soccer, basketball, swimming, and badminton, finding joy in the camaraderie and physical challenges each sport offers."
      />
      <ResumeHeading
        heading="Travel"
        description="Enthusiastic about exploring diverse cultures, from Korea and Japan to Hawaii, Singapore, Vietnam, the UK, France, and Italy."
      />
      <ResumeHeading
        heading="Music"
        description="Cultivating a love for music, particularly VPop, Kpop, and US-UK genres, as a source of inspiration and cultural connection."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex
            ? `${styles["bullet"]} ${styles["selected-bullet"]}`
            : styles["bullet"]
        }
        key={index}
      >
        <img
          src={bullet.logoSrc}
          alt="bullet-logo"
          className={styles["bullet-logo"]}
        />
        <span className={styles["bullet-label"]}>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className={styles["resume-details-carousal"]}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className={`${styles["resume-container"]} screen-container fade-in`}
      id={props.id || ""}
    >
      <div className={styles["resume-content"]}>
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
        <div className={styles["resume-card"]}>
          <div className={styles["resume-bullets"]}>
            <div className={styles["bullet-container"]}>
              <div className={styles["bullet-icons"]}></div>
              <div className={styles["bullets"]}>{getBullets()}</div>
            </div>
          </div>

          <div className={styles["resume-bullet-details"]}>
            {getResumeScreens()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
