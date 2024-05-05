import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';

const Contact = () => (
  <section id="contact" className="contact">
    <PageHeaderContent
      headerText="Contact"
      icon={<AiOutlineMail size={40} />}
    />
    <div className="contact__content">
      <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: 'translateY(550px)',
        }}
        end={{
          transform: 'translateY(0px)',
        }}
      >
        <h3 className="contact__content__header-text">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</h3>

        <form className="contact__content__form" action="https://formspree.io/f/mwkgbvkj" method="post">
          <div className="contact__content__form__controlswrapper">
            <div>
              <input
                required
                name="name"
                id="name"
                className="inputName"
                type="text"
              />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input
                required
                name="email"
                id="email"
                className="inputEmail"
                type="email"
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <textarea
                required
                name="description"
                id="description"
                className="inputDescription"
                type="text"
                rows="5"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button type="submit">GET IN TOUCH</button>
        </form>
      </Animate>
    </div>
  </section>
);

export default Contact;
