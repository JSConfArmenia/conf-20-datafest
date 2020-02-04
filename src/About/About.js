import React from 'react';

import Title, { TitleAccent } from '../_components/Title';
import Description from '../_components/Description';

import './About.scss';

const About = () => (
  <section id="about" className="About">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="SectionBox">
            <Title>
              What is
              {' '}
              <TitleAccent color="primary1">
                DataFest Yerevan
              </TitleAccent>
            </Title>
            <Description>
              DataFest Yerevan is a conference covering diverse topics in machine learning,
              with a strong focus on engineering and applications.
              It is a forum for sharing ideas and fostering collaboration.
              <br />
              <br />
              {/* <a */}
              {/*  className="CodeOfConductLink" */}
              {/*  href="https://github.com/JSConfArmenia/conf-19-react/blob/master/CODE_OF_CONDUCT.md" */}
              {/*  target="_blank" */}
              {/*  rel="noopener noreferrer" */}
              {/* > */}
              {/*  <span role="img" aria-label="code of conduct">❕</span> */}
              {/*  {' '} */}
              {/*  code of conduct */}
              {/* </a> */}
            </Description>
          </div>
        </div>
        {/* <div className="col-lg-4"> */}
        {/*  <div className="IllustrationContainer"> */}
        {/*    <img */}
        {/*      className="Illustration" */}
        {/*      src="./about-conf-image.png" */}
        {/*      alt="About React Conf Armenia" */}
        {/*    /> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
    </div>
  </section>
);

export default About;
