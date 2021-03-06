import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import step1 from '../assets/images/step11.jpg';
import step2 from '../assets/images/step2.jpg';
import step3 from '../assets/images/step3.jpg';
import step4 from '../assets/images/step4.jpg';

import pic4 from '../assets/images/mona.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="arabic top-right">
        <Link to="./Ar">
          <span role="img" alt="arabic language">
            <h1> العربية </h1>
          </span>
        </Link>
      </div>
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                How it works?
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>The way for online arranged marriages!</h2>
          <p>
            Once we launch our website, you'll be able to find your spouse with
            ease. Once you enter your personal information and your preferences,
            we'll match you with your perfect fit! No more fear of getting
            rejected or the embarrassment and awkwardness involved, you'll only
            meet the person who wants you!
          </p>
        </header>
        <form
          name="contact1"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="contact1" value="contact1" />
          <div className="row gtr-50 gtr-uniform">
            <div className="col-8 ">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue=""
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="col-4 ">
              <Link to="./Success">
                <button type="submit" className="primary small ">
                  Send
                </button>
              </Link>
            </div>
          </div>
        </form>
        <h2 className="col-8  "> Join Us Now!</h2>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeELX_W3WkiLKrzXOhl0L8_WFdFkEZmD_Nrt0h1KGtrGkSmwQ/viewform?vc=0&c=0&w=1">
            <button className="primary small " style={{ marginRight: 20 }}>
              I am a guy!
            </button>
          </a>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_OFidCdUvWPQvD9vTINUqkqgkpHXDShYm9oDLmjQ51BX3w/viewform?vc=0&c=0&w=1">
            <button className="primary small">I am a girl!</button>
          </a>
        </div>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={step1} alt="a women filling in a sign up form" />
        </div>
        <div className="content">
          <h2>Step 1:</h2>
          <p>
            Create an account and add your personal information (your college
            degree, salary, height, weight, skin tone etc.)
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={step2} alt="" />
        </div>
        <div className="content">
          <h2>Step 2:</h2>
          <p>
            Add your preferences. What are you looking for in your partner? What
            salary range? What look? What college degree you prefer them to
            have, if any?
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={step3} alt="" />
        </div>
        <div className="content">
          <h2>Step 3:</h2>
          <p>
            Wait to get matched! We'll run your preferences and personal
            information through our data base and find the people who meet your
            preferences and you meet theirs!
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={step4} alt="" />
        </div>
        <div className="content">
          <h2>Step 4:</h2>
          <p>
            Meet your future spouse! Once you are matched, your contact
            information will be shared with your potential spouse and you can
            connect and meet up in real life to get to know each other.
          </p>
        </div>
      </section>
      <br />
      <div className="wrapper inner ">
        <h5>Here are examples of questions that may be asked</h5>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Gender</th>
                <th>About you</th>
                <th>your preferences in your partner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Females</td>
                <td>
                  age, job, , height, weight, color, dad, mom, sisters, brothers
                  past marriages?
                </td>
                <td>his age, skin tone, job, deal breaker? </td>
              </tr>
              <tr>
                <td>Males</td>
                <td>
                  age, job, skin tone, height, weight, car, estimate income,
                  Important note about marriage, past marriages?
                </td>
                <td>
                  her age, skin tone, dad, mom, sisters, brothers, deal breaker?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Made by doctors for doctors</h2>
          <p>A huge thanks to doctors who made effort into this program</p>
        </header>

        <section className="row gtr-50 gtr-uniform aln-center">
          <div className=" col ">
            <img className="image fit " src={pic4} alt="" />
          </div>
        </section>
        <div>
          <br />
          <br />

          <blockquote>
            "The boys, they are too shy. It's a deal breaker." <br />
            -Dr. Mona Solaiman
          </blockquote>
        </div>
      </div>
    </section>

    <section id="three" className="wrapper style4 special">
      {/* <div className="inner">
        <h2>We'll let you know as soon as we launch</h2>
      </div> */}
      <div className="inner  ">
        {/* <form name="contact" method="POST" data-netlify="true" action="./404">
          <input type="hidden" name="contact" value="contact" />
          <div className="row ">
            <div className="col-8 ">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue=""
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="col-4 ">
              <Link to="./Success">
                <button type="submit" className="primary  ">
                  Send
                </button>
              </Link>
            </div>
          </div>
        </form> */}
        <h2 className="col-8  "> Join Us Now!</h2>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeELX_W3WkiLKrzXOhl0L8_WFdFkEZmD_Nrt0h1KGtrGkSmwQ/viewform?vc=0&c=0&w=1">
            <button className="primary small " style={{ marginRight: 20 }}>
              I am a guy!
            </button>
          </a>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_OFidCdUvWPQvD9vTINUqkqgkpHXDShYm9oDLmjQ51BX3w/viewform?vc=0&c=0&w=1">
            <button className="primary small">I am a girl!</button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
