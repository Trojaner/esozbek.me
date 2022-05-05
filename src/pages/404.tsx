import * as React from "react"
import { useEffect } from "react"
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  useEffect(() => {
    setTimeout(() => {
      location.href = '/';
    }, 5000);
  }, []);

  return (
    <Layout>
      <section className="section">
        <Helmet>
          <title>Contact - Enes Sadık Özbek</title>
        </Helmet>
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1>404 - Not found</h1>
                <div className="section">
                  The requested page was not found. Redirecting to main page...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NotFoundPage
