import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

import Scroll from "../components/Scroll";

import pic1 from "../assets/images/love.jpg";
import pic2 from "../assets/images/work.jpg";
import pic3 from "../assets/images/heart.jpg";
import pic4 from "../assets/images/merna.jpg";
import config from "../../config";
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                What's this?
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
          <h2>
            Love is a thing of the past
            <br />
            Assets and money baby
          </h2>
          <p>
            Here we do traditional online, bring YOUR salon
            <br />
            It's straight forward there's just no time to spare.
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
              <Link to="./404">
                <button type="submit" className="primary fit">
                  Early Access
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="mans arms around her shoulders" />
        </div>
        <div className="content">
          <h2>Database auto matching</h2>
          <p>
            It's unbelievable to have to meet individuals face to face, what are
            the chances..! <br />
            Still remember your "perfect man" check list? no, you gave up on it
            along time ago... make one! we'll take that from you
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            What you need
            <br />
            not what you wish for
          </h2>
          <p>
            I know I know it's amazing to have a santa... but we grew out of
            that 10 years ago? maybe not! so santa is here.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            We look for him
            <br />
            so you don't have to
          </h2>
          <p>
            there is a lot of shit to do in life, it's crazy.
            <br />
            well why are you still here go go.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Made by doctors for doctors</h2>
          <p>A huge thanks to doctors who made effort into this program</p>
        </header>

        <section className="row gtr-50 gtr-uniform">
          <div className=" col-6">
            <img className="image fit" src={pic4} alt="" />
          </div>

          <div className=" col-6">
            <img className="image fit" src={pic4} alt="" />
          </div>

          <div className=" col-4">
            <img className="image fit" src={pic4} alt="" />
          </div>
          <div className=" col-4">
            <img className="image fit" src={pic4} alt="" />
          </div>

          <div className=" col-4">
            <img className="image fit" src={pic4} alt="" />
          </div>
          <p>
            These It's unbelievable to have to meet individuals face to , what
            are the chances..! <br />
            Still remember your "perfect man" check list? no, you gave up on it
            along time ago... make one! we'll take that from you
          </p>
        </section>
        <div>
          <br />
          <br />
          <h6>These doctor's thoughts on the program</h6>
          <br />
          <blockquote>
            "The boys, they are too shy. It's a deal breaker." <br />
            -Dr. Mona Solaiman
          </blockquote>
          <blockquote>
            "To make sure what we want is what we get this is just an
            alternative method for reproduction" <br />
            -Dr. Mona Solaiman
          </blockquote>
          <blockquote>
            "To make sure what we want is what we get this is just an
            alternative method for reproduction" <br /> -Dr. Mona Solaiman
          </blockquote>
        </div>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <h2>We'll let you know as soon as we launch</h2>
      </div>
      <div className="inner col-12 ">
        <form name="contact" method="POST" data-netlify="true" action="./404">
          <input type="hidden" name="contact" value="contact" />
          <div className="row ">
            <div className="col-10 ">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue=""
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="col-2 ">
              <Link to="./404">
                <button type="submit" className="primary ">
                  Early Access
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
