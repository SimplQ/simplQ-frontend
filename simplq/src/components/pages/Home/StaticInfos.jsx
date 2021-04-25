/* eslint-disable  react/jsx-one-expression-per-line */

import React from 'react';
import StandardButton from 'components/common/Button';
import { smoothScrollToHomePageTop } from 'utils/scrollingOperations';
import styles from './Home.module.scss';

export const BenefitsInfo = () => (
  <div className={`${styles['section']} ${styles['benefits-info']}`}>
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-1']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-2']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-3']} />

    <h2 data-aos="zoom-in">Covid Emergency Contact Links</h2>
    <div className={styles['resource-container']}>
      <div>
        <h3 data-aos="zoom-in">Countywide</h3>
        <p>
          <a href="https://airtable.com/shrIlOoS6PyhIIVEv/tblEh7J9M3aZmgSgo/viwMGzLDgblhMFcwh?blocks=bipKp2Nvee9X72oZp">
            CovidFYI Master Data (Community Driven Aggregator) (City/Resource wise)
          </a>
        </p>
        <p>
          <a href="https://coronaresources.web.app/">
            CoronaResources (Community Driven Aggregator) (City/Resource wise)
          </a>
        </p>

        <p>
          <a href="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/8?id=DASHBOARD_601b9e214c7a6b689d76f493">
            Social Media resources post dashboard (City wise)
          </a>
        </p>
        <p>
          <a href="https://covid19-twitter.in/">Twitter search tool (Tier 2/3 Cities supported)</a>
        </p>
        <p>
          <a href="https://life.coronasafe.network/">
            Coronasafe (Community Driven Aggregator) (City/Resource wise)
          </a>
        </p>
      </div>
      <div>
        <h3 data-aos="zoom-in">Hydrabad</h3>
        <p>
          <a href="https://hydcovidresources.com">
            Hydrabad Covid Resources (Community Driven Aggregator)
          </a>
        </p>
      </div>
      <div>
        <h3 data-aos="zoom-in">Bangalore</h3>
        <p>
          <a href="https://docs.google.com/spreadsheets/d/1M9J1nDFLxJ2hevqNuPA7puhrxGRl_dZTT8LQNdHMcmA/edit#gid=0">
            Govt helpline contact for oxygen and remdesivi
          </a>
        </p>
      </div>
      <div>
        <h3 data-aos="zoom-in">Delhi</h3>
        <p>
          <a href="https://bbmpgov.com/chbms/">Covid-19 Hospital Bed Status</a>
        </p>
      </div>
      <div>
        <h3 data-aos="zoom-in">Faq and general Govt Guidelines</h3>
        <p>
          <a href="https://www.mohfw.gov.in/covid_vaccination/vaccination/questions-and-answers.html">
            Vaccination Information - Govt of India
          </a>
        </p>
      </div>
      <div>
        <h3 data-aos="zoom-in">Make a Donation</h3>
        <a href="https://hemkuntfoundation.com/donate-now/">Hemkunt Foundation</a>
      </div>
    </div>
    <h2 data-aos="zoom-in">Help covid warriors maintain social distancing.</h2>
    <div data-aos="zoom-in" className={`${styles['container']} ${styles['benefits-container']}`}>
      <div className={styles.benefit}>
        <img src="/images/minimize_crowding.png" alt="minimize crowding" />
        <p>No more crowd at hospitals / vaccine centers.</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/social_dist.jpg" alt="Enforce social distancing" />
        <p>Social distancing tool for the digital world.</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/check_status.svg " alt="Check your current status" />
        <p>People can wait patiently and see how many people are in front of them in the queue.</p>
      </div>
    </div>
  </div>
);

export const HowToCreate = () => (
  <>
    <div
      data-aos="fade-up"
      id="target_how_it_works"
      className={`${styles['section']} ${styles['queue-info']}`}
    >
      <h2>How to use SimplQueue</h2>
      <div className={`${styles['container']} ${styles['queue-container']}`}>
        <div className={styles.queue}>
          <img src="/images/queue_creation.svg" alt="Queue creation" />
        </div>
        <div className={styles.queue}>
          <ul className={styles['list-info']}>
            <img src="/images/wand.svg" alt="Wand" />
            <li>
              <h3>1. Create Vaccine Queue</h3>
              <p>All you need is a queue name.</p>
            </li>
            <img src="/images/share-24px.svg" alt="Share" />
            <li>
              <h3>2. Add people to the queue</h3>
              <p>
                When people come to get vaccinated, add them to the queue by taking their name and
                mobile number.
              </p>
              <p>Ask them to wait outside without crowding in front of the vaccine .</p>
            </li>
            <img src="/images/people-24px.svg" alt="People" />
            <li>
              <h3>3. Share QR Code with people.</h3>
              <p>
                People can scan a QR code to check their position number in the queue. Token number
                can be send via <b>SMS</b>.
              </p>
            </li>
          </ul>
        </div>
        <p>
          India is going to do the biggest ever vaccination drive in history. Our vaccine centers
          are already crowded, and from May 1st we are opening for all above 18 years of age.
        </p>
        <iframe title="Covid situation" src="https://www.youtube.com/embed/0uljPj5KcNE" />
        <p>
          SimplQ is open source software built by software enthusiasts from around the world. This
          lets us bring you the core functionalities for free without any unnecessary fees. We also
          have an affordable month-to-month subscription option if you want to be a long term
          supporter.{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/919400413350">
            Talk to me
          </a>{' '}
          if you need dedicated support or have any custom requirements.
        </p>
        <p>
          We are generic enough to allow customers to choose the best way for them to use it, but
          small enough to care about the individual needs of every customer.
        </p>
      </div>
    </div>
    <svg id={styles['curved-div-2']} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 50">
      <path
        fill="#6C63FF29"
        fillOpacity="1"
        d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>
  </>
);

export const HowToJoin = () => (
  <div className={`${styles['section']} ${styles['join-info']}`}>
    <h2 data-aos="zoom-in">Join a queue without crowd</h2>
    <div className={`${styles['container']} ${styles['queue-container']}`}>
      <div data-aos="fade-right" className={styles['queue']}>
        <ul className={styles['list-info']}>
          <img src="/images/mobile_friendly-24px.svg" alt="Mobile friendly" />
          <li>
            <h3>Join a queue</h3>
            <p>
              When you react the vaccine center or hosital, give your mobile number to get into the
              queue.
            </p>
          </li>
          <img src="/images/alarm-24px.svg" alt="Alarm" />
          <li>
            <h3>Waiting for the staff to call you when your turn in near</h3>
            <p>Check your token status in queue and get notified when your turn is up</p>
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" className={styles['queue']}>
        <img src="/images/join.svg" alt="Join" />
      </div>
    </div>
  </div>
);

export const ExtraInfo = () => (
  <div className={`${styles['section']} ${styles['extra-info']}`}>
    <div className={`${styles['container']} ${styles['extra-container']}`}>
      <div className={styles['card']}>
        <img src="/images/free.svg" alt="free" />
        <p className={styles['brief-description']}>Always free</p>
        <p className={styles['detailed-description']}>
          We are a team of enthusiastic developers who want to give back to society and do not
          prioritize monetary gains.
        </p>
      </div>
      <div className={styles['card']}>
        <img src="/images/secure.svg" alt="secure" />
        <p className={styles['brief-description']}>Data security</p>
        <p className={styles['detailed-description']}>
          Security is paramount and we take data security seriously.
        </p>
      </div>
      <div className={styles['card']}>
        <img src="/images/easy.svg" alt="easy to use" />
        <p className={styles['brief-description']}>Easy to use</p>
        <p className={styles['detailed-description']}>
          We provide free queue management thereby allowing you to focus on better things.
        </p>
      </div>
    </div>
  </div>
);

export const Pricing = () => (
  <div data-aos="fade-up" className={`${styles['section']} ${styles['get-started']}`}>
    <h2 data-aos="zoom-in">Pricing - Plans for every use case</h2>
    <div className={styles['container']}>
      <div className={styles['price-card']}>
        <h1>Free</h1>
        <p className={styles['subtitle']}>Free for public use.</p>
        <li>
          <ul>Unlimited Queues.</ul>
          <ul>Unlimited tokens per month.</ul>
        </li>
        <p className={styles['amount']}>$0</p>
        <StandardButton onClick={smoothScrollToHomePageTop}>Start for free</StandardButton>
      </div>
      <div className={styles['price-card']}>
        <h1>Non Health Care Business</h1>
        <p className={styles['subtitle']}>Want to bring social distancing for your customers?</p>
        <li>
          <ul>Everything in the free plan.</ul>
          <ul>Unlimited tokens per month.</ul>
          <ul>Custom subdomains.</ul>
          <ul>Multi-user support.</ul>
          <ul>Priority Customer Support.</ul>
        </li>
        <p className={styles['amount']}>Rs. 399/mo</p>
        <StandardButton onClick={smoothScrollToHomePageTop}>Contact Me</StandardButton>
      </div>
      <div className={styles['price-card']}>
        <h1>Enterprise</h1>
        <p className={styles['subtitle']}>Best for unique requirements that need to scale.</p>
        <li>
          <ul>Everything in the business plan.</ul>
          <ul>In-house installation support.</ul>
          <ul>Custom features, integrations, branding.</ul>
        </li>
        <StandardButton
          onClick={() => {
            window.location = 'https://kss9gyhvcy3.typeform.com/to/kHJHPLEr';
          }}
        >
          Contact Me
        </StandardButton>
      </div>
    </div>
    <p>* No credit card required till you upgrade.</p>
  </div>
);
