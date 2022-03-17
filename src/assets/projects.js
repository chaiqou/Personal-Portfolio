import { v4 as uuidv4 } from "uuid";

const player = "https://source.unsplash.com/1600x900/?music";
const portfolio = "https://source.unsplash.com/1600x900/?webdeveloper";

const projects = [
  {
    id: uuidv4(),
    name: "Talga Player",
    desc: "Tech: React, Redux, Styled-Components.",
    img: player,
  },
  {
    id: uuidv4(),
    name: "Personal Portfolio",
    desc: "Tech: React, Styled-Components.",
    img: portfolio,
  },
];

export default projects;
