import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import PageHeaderContent from '../../components/pageHeaderContent';
import skillsData from './utils';
import './styles.scss';

const Skills = () => (
  <section id="skills" className="skills">
    <PageHeaderContent
      headerText="Skills"
      icon={<FaCode size={40} />}
    />

    <div className="skills__content-wrapper">
      {
        skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateY(800px)',
              }}
              end={{
                transform: 'translateY(0px)',
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="progressbar-container">
                {
                  item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      key={j}
                      play
                      duration={1}
                      keyframes={['opacity: 1', 'opacity: 1']}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper">
                        <p>{skillItem.skillname}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--theme-main-color)"
                          trailWidth="2"
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))
                }
              </div>
            </Animate>
          </div>
        ))
      }
    </div>
  </section>
);

export default Skills;
