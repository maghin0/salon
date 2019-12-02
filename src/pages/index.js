import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/love.jpg';
import pic2 from '../assets/images/work.jpg';
import pic3 from '../assets/images/heart.jpg';
import config from '../../config';
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
            It's straight forward there's just no time to spear.
          </p>
        </header>
        <form method="post" action="#">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-8 ">
              <input
                type="email"
                name="demo-email"
                id="demo-email"
                defaultValue=""
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="col-4">
              <ul className="actions fit">
                <li>
                  <input
                    type="button"
                    value="Early Access"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
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
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <blockquote>
            To make sure what we want is what we get this is just an alternative
            method for reproduction
          </blockquote>
        </section>
        <br></br>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <blockquote>
            To make sure what we want is what we get this is just an alternative
            method for reproduction
          </blockquote>
        </section>
        <br></br>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <blockquote>
            To make sure what we want is what we get this is just an alternative
            method for reproduction
          </blockquote>
        </section>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <h2>We'll let you know as soon as we launch</h2>
      </div>
      <div className="inner">
        <header>
          <form method="post" action="#">
            <div className="col-8 ">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue=""
                placeholder="youremail@gmail.com"
              />
            </div>
          </form>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Early access
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
