import React from "react";
import {
  SiJavascript,
  SiReact,
  SiLaravel,
  SiTailwindcss,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServiceSectionItem from "./ServiceSectionItem";

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
            icon={<SiJavascript style={{ color: "yellow" }} />}
            title="Javascript"
            desc="Javascript (JS) is a scripting languages, primarily used on the Web."
          />
          <ServiceSectionItem
            icon={<FaVuejs style={{ color: "#42b883	" }} />}
            title="Vue"
            desc="Vue.js is an open-source front end JavaScript framework for building user interfaces and single-page applications."
          />
          <ServiceSectionItem
            icon={<SiLaravel style={{ color: "#fb503b" }} />}
            title="Laravel"
            desc="Laravel is a free and open-source PHP web framework, following the (MVC) architectural pattern."
          />
          <ServiceSectionItem
            icon={<SiTailwindcss style={{ color: "#67e8f9" }} />}
            title="Tailwind"
            desc="A utility-first CSS framework."
          />
          <ServiceSectionItem
            icon={<SiReact style={{ color: "#61DBFB" }} />}
            title="React"
            desc="React is a open-source front-end JavaScript library for building user interfaces."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
