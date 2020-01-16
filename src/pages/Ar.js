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
      <div className="arabic top-right icons">
        <Link to="./">
          <div>
            <span role="img" alt="english language">
              <h6> English</h6>
            </span>
          </div>
        </Link>
      </div>

      <div className="inner arabic">
        <h2>{config.heading}</h2>
        <h4>{config.subHeadingAr}</h4>
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

    <section id="one" className="wrapper style1 special arabic">
      <div className="inner">
        <header className="major">
          <h2>زواج صالونات اون لاين</h2>
          <p>
            بمجرد اصدار موقع الويب الخاص بنا ، ستتمكن من العثور على شريكك
            بسهولة. بمجرد إدخال بياناتك الشخصية واولوياتك ، سنرشدك لما يناسبك
            تمامًا! لا مزيد من القلق أو الاحراج من مقابلة الشخص غير المناسب سوف
            تقابل فقط الشخص الذى تتمناه
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
      </div>
    </section>

    <section id="two" className="wrapper alt style2 arabic">
      <section className="spotlight">
        <div className="image">
          <img src={step1} alt="a women filling in a sign up form" />
        </div>
        <div className="content">
          <h2>الخطوه 1</h2>
          <p>
            افتح حساب وادخل بياناتك الشخصية مثل المؤهل الدراسي/ الراتب
            الوزن/الطول .......الخ
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={step2} alt="" />
        </div>
        <div className="content">
          <h2>الخطوه 2</h2>
          <p>
            اكتب المواصفات التي تبحث عنها فى شريك حياتك مثل
            المؤهل/الراتب/الوظيفه/السن......الخ
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={step3} alt="" />
        </div>
        <div className="content">
          <h2>الخطوه 3</h2>
          <p>
            انتظر حتى نقوم بمطابقة رغباتك مع رغبات الآخرين حتى نصل للشريك
            المناسب لك.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={step4} alt="" />
        </div>
        <div className="content">
          <h2>الخطوه 4</h2>
          <p>
            الان يمكنك مقابلة شريكك لتتعرف عليه والتأكد من أنه الشخص المناسب
            الذى تتمناه.
          </p>
        </div>
      </section>
      <section className="wrapper style1">
        <div className="content inner">
          <p>
            <br />
            It's unbelievable you still have to meet your possible love with
            daily face to face encounters 🤦‍♂️, I mean what are your chances...
            <br />
            Do you Still remember your "perfect man" 🤷‍♀️ check list? I don't
            think so, you probably gave up on it along time ago...😂 make one!
            and we'll take that from you. <br />
            Now we'll do all the heavy stuff, we'll try and find your list in
            our database 🤞, you just wait like a boss😎.
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
            <img className="image fit" src={pic4} alt="Dr Mona Soliman " />
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

    <section id="three" className="wrapper style4 special arabic">
      <div className="inner">
        <h2>
          إذا كنت مهتمًا بما نقدمه ، فقم بوضع بريدك الإلكتروني ليتم إشعارك بمجرد
          اصدار الموقع!
        </h2>
      </div>
      <div className="inner  ">
        <form name="contact" method="POST" data-netlify="true" action="./404">
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
        </form>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
