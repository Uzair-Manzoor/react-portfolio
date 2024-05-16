import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import {
  FaDatabase, FaReact, FaJsSquare, FaDev,
} from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const JobSummary = "Dedicated to creating seamless user experiences through a combination of intuitive front-end designs and robust back-end functionalities. I'm a full-stack web developer skilled in a wide range of languages, frameworks, and technologies. I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.";

const About = () => (
  <section id="about" className="about">
    <PageHeaderContent
      headerText="About"
      icon={<BsInfoCircleFill size={40} />}
    />
    <Animate
      play
      duration={1.5}
      delay={0.5}
      start={{
        transform: 'translateY(770px)',
      }}
      end={{
        transform: 'translateY(0px)',
      }}
    >
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Full Stack Web Developper</h3>
          <p>{JobSummary}</p>
        </div>
        <div className="about__content__servicesWrapper">

          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDatabase size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaJsSquare size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaReact size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </Animate>
  </section>
);

export default About;
