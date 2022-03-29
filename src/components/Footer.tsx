import * as React from "react";
import { Link } from "gatsby";

import github from "../images/social/github.svg";
import instagram from "../images/social/instagram.svg";
import twitter from "../images/social/twitter.svg";
import linkedin from "../images/social/linkedin.svg";

export default function Footer() {
    return (
        <footer className="footer has-background-black has-text-white-ter">
            <div className="content has-text-centered has-background-black has-text-white-ter">
                <div className="container has-background-black has-text-white-ter">
                    <div style={{ maxWidth: "100vw" }} className="columns">
                        <div className="column is-4">
                            <section className="menu">
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/" className="navbar-item">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="navbar-item" to="/portfolio">
                                            Portfolio
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4">
                            <section>
                                <ul className="menu-list">
                                    <li>
                                        <Link className="navbar-item" to="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="navbar-item" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4 social">
                            <a title="GitHub" href="https://github.com/Trojaner">
                                <img
                                    src={github}
                                    alt="GitHub"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a title="Twitter" href="https://twitter.com/Trojaner_">
                                <img
                                    className="fas fa-lg"
                                    src={twitter}
                                    alt="Twitter"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a title="Instagram" href="https://instagram.com/es_ozbek">
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a title="LinkedIn" href="https://linkedin.com/esozbek">
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
