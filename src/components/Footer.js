import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
  a{
    color: inherit; 
    text-decoration: inherit;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Nikoloz Lomtadze</h1>
          <PText>
           I'm freelance website developer from Kutaisi,
            Georgia. I create professional websites.I always
            try to show unique views to the audience.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
       <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/chaiqou',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100005353998337',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/satoshi.nakamoto.undefined/',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/nikoloz-lomtadze-09a300212/',
              },
            ]}
          />
        </div>
         <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+995 574 22 11 21',
                path: 'tel:+995574221121',
              },
              {
                title: 'lomtadzenikusha@gmail.com',
                path: 'mailto:lomtadzenikusha@gmail.com',
              },
              
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <a  target="_blank" rel="noreferrer" href="https://github.com/chaiqou">
             © 2021 - Designed & Built by Nikoloz Lomtadze
            </a>{' '}
          </PText>
        </div>
      </div>
  
    </FooterStyle>
  );
}