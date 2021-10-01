import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../assets/hero.jpeg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2rem;
    color: yellow;
    text-align: center;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    margin-top: 1rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  linkURL
}) {
  return (
    <ProjectItemStyles>
     <img src={img} alt="project img" className='projectItem__img' onClick={()=> window.open("https://github.com/chaiqou?tab=repositories", "_blank")}  />
     <div className="projectItem__info">
      <h3 className="projectItem__title">{title}</h3>
        
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}