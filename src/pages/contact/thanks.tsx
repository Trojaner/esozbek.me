import React from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

export default () => (
  <Layout>
    <section className="section">
      <Helmet>
        <title>Contact | Enes Sadık Özbek</title>
      </Helmet>
      <div className="container">
        <div className="content">
          <h1>Thank you for contacting me!</h1>
        </div>
      </div>
    </section>
  </Layout>
);
