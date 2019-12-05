import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>thank you</h2>
        <p>we will send you an email as soon as we launch</p>
        <Link to="#">
          <button type="submit" className="primary ">
            Back to homepage
          </button>
        </Link>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
