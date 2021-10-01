import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone,  } from 'react-icons/md';
import {  AiFillLinkedin } from 'react-icons/ai';
import ContactInfoItem from '../components/ContactInfoItem';
import SectionTitle from '../components/SectionTitle';
import contactSvg from '../assets/contact.svg'

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem  icon={<AiFillLinkedin style={{color: 'yellow'}}/>}text="Nikoloz Lomtadze" />
            <ContactInfoItem icon={<MdEmail style={{color: "yellow"}} />} text="lomtadzenikusha@gmail.com" />
            <ContactInfoItem icon={<MdLocalPhone style={{color: "yellow"}} />} text="+995 574 22 11 21" />
            <ContactInfoItem text="Kutaisi , Georgia" />

          </div>
          <div className="right">
           <img alt='contacts' src={contactSvg} />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );

};