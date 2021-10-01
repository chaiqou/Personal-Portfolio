import React from 'react';
import { SiJavascript, SiReact, SiRedux } from 'react-icons/si';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Skills" />
        <div className="services__allItems">
          <ServiceSectionItem
            icon={<SiJavascript style={{color: "yellow"}} />}
            title="Javascript"
            desc="Javascript (JS) is a scripting languages, primarily used on the Web."
          />
          <ServiceSectionItem
            icon={<SiReact style={{color: "#61DBFB"}} />}
            title="React"
            desc="React is a open-source front-end JavaScript library for building user interfaces."
          />
          <ServiceSectionItem
            icon={<SiRedux style={{color: "#764abc"}}  />}
            title="Redux"
            desc="Redux is an open-source JavaScript library for managing and centralizing application state."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}