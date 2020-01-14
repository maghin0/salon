import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>404</h2>
        <p>Error</p>
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
