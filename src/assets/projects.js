import { v4 as uuidv4 } from 'uuid';
import portfolio from './portfolio.jpg';
import player from './player.jpg';



const projects = [
  {
    id: uuidv4(),
    name: 'Talga Player',
    desc:
      'Tech: HTML5, CSS3, Javascript, React, Redux, Styled-Components.',
    img: player,
    
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc:
      'Tech: HTML5, CSS3, Javascript, React, Styled-Components.',
    img: portfolio,
  },
 ];

export default projects;