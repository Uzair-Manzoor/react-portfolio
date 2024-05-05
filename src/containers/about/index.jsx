import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import {
  FaDatabase, FaReact, FaJsSquare, FaDev,
} from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const JobSummary = "Hello, I'm Uzair, a certified full-stack web developer deeply passionate about crafting seamless user experiences by seamlessly integrating intuitive front-end designs with robust back-end functionalities. || Front-End: JavaScript, Redux, React || Back-End: Ruby on Rails, PostgreSQL || Tools & Methods: HTML5, CSS3, VS Code, GitHub, npm || Professional: Responsive web design || Proficient in a diverse array of programming languages, frameworks, and technologies, including Rails and React, I possess a keen aptitude for swiftly adapting to new tools and methodologies. || My tenure at Microverse underscores my commitment to excellence, evidenced by a remarkable 95% project completion rate and a perfect 45/45 final assessment score. Backed by a meticulous approach to problem-solving, I offer a unique blend of technical proficiency and cultural sensitivity to every project I undertake. || Driven by an insatiable thirst for knowledge and personal growth, I wholeheartedly embrace the exhilarating journey of coding. For inquiries or to explore my portfolio, please don't hesitate to reach out:|| ✉ Email: uzair.kayani555@gmail.com; || 🐈‍⬛ GitHub: https://github.com/Uzair-Manzoor; || 🌐 Portfolio website: https://uzair-manzoor.github.io/Portfolio/. || I'm always enthusiastic about engaging in meaningful conversations and embarking on exciting collaborations. Let's connect and venture together into the dynamic realm of software development!";

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
