import { v4 as uuidv4 } from "uuid";

const player = "https://source.unsplash.com/1600x900/?music";
const portfolio = "https://source.unsplash.com/1600x900/?webdeveloper";
const sneakers = "https://source.unsplash.com/1600x900/?sneakers";
const homes = "https://source.unsplash.com/1600x900/?homes";
const media = "https://source.unsplash.com/1600x900/?socialmedia";
const Redberry = "https://source.unsplash.com/1600x900/?redberry";

const projects = [
  {
    id: uuidv4(),
    name: "Talga Social Media",
    desc: "Tech: React, Sanity.io, React-Router, Tailwind CSS , React-Masonry-Css, React-Google-Login.",
    img: media,
  },
  {
    id: uuidv4(),
    name: "Talga Sneakers Shop",
    desc: "Tech: React, React-Router, Firebase, Styled-components, React-Google-Login.",
    img: sneakers,
  },
  {
    id: uuidv4(),
    name: "Talga Homes",
    desc: "Tech: Next.js, Tailwind CSS , React-Date-Range.",
    img: homes,
  },
  {
    id: uuidv4(),
    name: "Talga Player",
    desc: "Tech: React, Redux, React-Router, Styled-Components.",
    img: player,
  },
  {
    id: uuidv4(),
    name: "Personal Portfolio",
    desc: "Tech: React, React-Router, React-Smooth-Scrollbar, Styled-Components.",
    img: portfolio,
  },
  {
    id: uuidv4(),
    name: "Redberry Challange",
    desc: "Tech: React, Formik, React-Router, Yup, Tailwind CSS.",
    img: Redberry,
  },
];

export default projects;
