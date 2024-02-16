import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useState } from "react";
import styles from "./Resume.module.css";
import {
  education_svg,
  experience_svg,
  interests_svg,
  projects_svg,
  skills_svg,
} from "../../assets/Resume";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

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
              {props.fromDate + "-" + props.toDate}
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
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "HTML/CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "abc",
      subHeading: "xyz",
    },
    {
      title: "Agriculture Solution",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "abc",
      subHeading: "xyz",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "abc",
      subHeading: "Technology Used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className={styles["resume-screen-container"]} key="education">
      <ResumeHeading
        heading={"University SJSU"}
        subHeading="BS"
        fromDate="2022"
        toDate="2023"
      />
    </div>,

    <div className={styles["resume-screen-container"]} key="work-experience">
      <div className={styles["experience-container"]}>
        <ResumeHeading
          heading={"Pho Ha Noi"}
          subHeading="IT"
          fromDate="2018"
          toDate="present"
        />
        <div className={styles["experience-description"]}>
          <span className={styles["resume-description-text"]}>
            Crrenlt abcxyz
          </span>
        </div>

        <div className={styles["experience-description"]}>
          <span className={styles["resume-description-text"]}>
            - POS integrate
          </span>
          <br />
          <span className={styles["resume-description-text"]}>
            - Website maintanance
          </span>
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
      <ResumeHeading heading="Teaching" description="abcxyz" />
      <ResumeHeading heading="Teaching" description="abcxyz" />
      <ResumeHeading heading="Teaching" description="abcxyz" />
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

  return (
    <div
      className={`${styles["resume-container"]} screen-container`}
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
