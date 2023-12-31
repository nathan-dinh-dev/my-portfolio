import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";

export const TOTAL_SCREEENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREEENS.length; i++) {
    if (TOTAL_SCREEENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
