import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { FORM } from "../../types";

type Props = {
  value?: FORM;
  image?: any;
};

const Template1: React.FC<Props> = ({ value, image }) => {
  let file_reader;
  if (image) {
    file_reader = new FileReader();
    file_reader.onload = function (e) {
      //@ts-ignore
      document.getElementById("portfolioImage")?.setAttribute("src", e.target.result);
    };
    file_reader.readAsDataURL(image);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Website</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </Head>
      <body className={`${styles["body"]}`}>
        <main>
          <header id="header" className={`${styles["header"]}`}>
            <div className={`${styles["overlay"]} ${styles["overlay-lg"]}`}>
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/square.png"
                className={`${styles["shape"]} ${styles["square"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/circle.png"
                className={`${styles["shape"]} ${styles["circle"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/half-circle.png"
                className={`${styles["shape"]} ${styles["half-circle1"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/half-circle.png"
                className={`${styles["shape"]} ${styles["half-circle2"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/x.png"
                className={`${styles["shape"]} ${styles["x-shape"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/wave.png"
                className={`${styles["shape"]} ${styles["wave"]} ${styles["wave1"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/wave.png"
                className={`${styles["shape"]} ${styles["wave"]} ${styles["wave2"]} ${styles["img"]}`}
                alt=""
              />
              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/triangle.png"
                className={`${styles["shape"]} ${styles["triangle"]} ${styles["img"]}`}
                alt=""
              />

              <img
                src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/points1.png"
                className={`${styles["points"]} ${styles["points1"]} ${styles["img"]}`}
                alt=""
              />
            </div>

            <nav className={`${styles["nav"]}`}>
              <div className={`${styles["container"]}`}>
                <div className={`${styles["links"]}`}>
                  <ul className={`${styles["ul"]}`}>
                    <li>
                      <a className={`${styles["a"]}`} href="#header">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className={`${styles["a"]}`} href="#services">
                        Services
                      </a>
                    </li>

                    <li>
                      <a className={`${styles["a"]}`} href="#about">
                        About
                      </a>
                    </li>

                    <li>
                      <a className={`${styles["a"]}`} href="#contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${styles["a"]} ${styles["active"]}`}
                        href="#hireme"
                      >
                        Hire me
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={`${styles["hamburger-menu"]}`}>
                  <div className={`${styles["bar"]}`}></div>
                </div>
              </div>
            </nav>

            <div className={`${styles["header-content"]}`}>
              <div className={`${styles["container"]} ${styles["grid-2"]}`}>
                <div className={`${styles["column-1"]}`}>
                  <h1 className={`${styles["header-title"]}`} id="name">
                    {value?.firstName}
                  </h1>
                  <p className={`${styles["text"]}`} id="description">
                    {value?.description}
                  </p>
                  <a href="#" className="btn">
                    Download CV
                  </a>
                </div>

                <div className={`${styles["column-2"]} ${styles["images"]}`}>
                  <img
                    src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/points2.png"
                    className={`${styles["points"]} ${styles["points2"]} ${styles["img"]}`}
                    alt=""
                  />
                  <img
                    src="https://abhishsharmagit.github.io/portfolio-website/img/person.png"
                    className={`${styles["img-element"]} ${styles["z-index"]} ${styles["img"]}`}
                    alt=""
                    id="portfolioImage"
                  />
                </div>
              </div>
            </div>
          </header>

          <section
            className={`${styles["services"]} ${styles["section"]}`}
            id="services"
          >
            <div className={`${styles["container"]}`}>
              <div className={`${styles["section-header"]}`}>
                <h3 className={`${styles["title"]}`} data-title="What I Do">
                  Services
                </h3>
              </div>

              <div className={`${styles["cards"]}`}>
                <div className={`${styles["card-wrap"]}`}>
                  <img
                    src="https://abhishsharmagit.github.io/portfolio-website/img/shapes/points3.png"
                    className={`${styles["points"]} ${styles["points1"]} ${styles["points-sq"]}`}
                    alt=""
                  />
                  <div className={`${styles["card"]}`} data-card="UI/UX">
                    <div
                      className={`${styles["card-content"]} ${styles["z-index"]}`}
                    >
                      <img
                        src="https://abhishsharmagit.github.io/portfolio-website/img/design-icon.png"
                        className={`${styles["icon"]}`}
                        alt=""
                      />
                      <h3 className={`${styles["title-sm"]}`} id="profile">
                        Web Design
                      </h3>
                      <p className={`${styles["text"]}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam est suscipit itaque?
                      </p>
                      <a href="#" className={`${styles["btn-small"]}`}>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`${styles["card-wrap"]}`}>
                  <div className={`${styles["card"]}`} data-card="Code">
                    <div
                      className={`${styles["card-content"]} ${styles["z-index"]}`}
                    >
                      <img
                        src="https://abhishsharmagit.github.io/portfolio-website/img/code-icon.png"
                        className={`${styles["icon"]}`}
                        alt=""
                      />
                      <h3 className={`${styles["title-sm"]}`}>
                        Web Development
                      </h3>
                      <p className={`${styles["text"]}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores suscipit nobis dolore?
                      </p>
                      <a href="#" className={`${styles["btn-small"]}`}>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`${styles["card-wrap"]}`}>
                  <div className={`${styles["card"]}`} data-card="App">
                    <div
                      className={`${styles["card-content"]} ${styles["z-index"]}`}
                    >
                      <img
                        src="https://abhishsharmagit.github.io/portfolio-website/img/app-icon.png"
                        className={`${styles["icon"]}`}
                        alt=""
                      />
                      <h3 className={`${styles["title-sm"]}`}>
                        App Development
                      </h3>
                      <p className={`${styles["text"]}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores suscipit nobis dolore?
                      </p>
                      <a href="#" className={`${styles["btn-small"]}`}>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles["about"]} ${styles["section"]}`}>
            <div className={`${styles["container"]}`}>
              <div className={`${styles["section-header"]}`}>
                <h3 className={`${styles["title"]}`} data-title="Who Am I">
                  About me
                </h3>
              </div>

              <div className={`${styles["section-body"]} ${styles["grid-2"]}`}>
                <div className={`${styles["column-1"]}`}>
                  <h3 className={`${styles["title-sm"]}`}>Hello, I'm</h3>
                  <p className={`${styles["text"]}`} id="about">
                    {value?.about}
                  </p>
                  <div className={`${styles["skills"]}`}>
                    <div className={`${styles["skill"]} ${styles["html"]}`}>
                      <h3 className={`${styles["skill-title"]}`}>React.JS</h3>
                      <div className={`${styles["skill-bar"]}`}>
                        <div
                          className={`${styles["skill-progress"]}`}
                          data-progress="90%"
                        ></div>
                      </div>
                    </div>
                    <div className={`${styles["skill"]} ${styles["css"]}`}>
                      <h3 className={`${styles["skill-title"]}`}>React.JS</h3>
                      <div className={`${styles["skill-bar"]}`}>
                        <div
                          className={`${styles["skill-progress"]}`}
                          data-progress="90%"
                        ></div>
                      </div>
                    </div>
                    <div className={`${styles["skill"]} ${styles["js"]}`}>
                      <h3 className={`${styles["skill-title"]}`}>React.JS</h3>
                      <div className={`${styles["skill-bar"]}`}>
                        <div
                          className={`${styles["skill-progress"]}`}
                          data-progress="90%"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className={`${styles["btn"]} ${styles["a"]}`}>
                    Read more
                  </a>
                </div>

                <div className={`${styles["column-2"]} ${styles["image"]}`}>
                  <img
                    src="https://abhishsharmagit.github.io/portfolio-website/img/app-icon.png"
                    className={`${styles["points"]} ${styles["img"]}`}
                    alt=""
                  />
                  <img
                    src="https://abhishsharmagit.github.io/portfolio-website/img/about.png"
                    className={`${styles["z-index"]} ${styles["img"]}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles["contact"]}`} id="contact">
            <div className={`${styles["container"]}`}>
              <div className={`${styles["contact-box"]}`}>
                <div className={`${styles["contact-info"]}`}>
                  <h3 className={`${styles["title"]}`}>Get in touch</h3>
                  <p className={`${styles["text"]}`} id="inTouch">
                    {value?.inTouch}
                  </p>
                  <div className={`${styles["information-wrap"]}`}>
                    <div className={`${styles["information"]}`}>
                      <div className={`${styles["contact-icon"]}`}>
                        <i
                          className={`${styles["fa-map-marker-alt"]} ${styles["fas"]}`}
                        ></i>
                      </div>
                      <p className={`${styles["info-text"]}`} id="address">
                        {value?.address}
                      </p>
                    </div>

                    <div className={`${styles["information"]}`}>
                      <div className={`${styles["contact-icon"]}`}>
                        <i
                          className={`${styles["fa-paper-plane"]} ${styles["fas"]}`}
                        ></i>
                      </div>
                      <p className={`${styles["info-text"]}`} id="email">
                        {value?.email}
                      </p>
                    </div>

                    <div className={`${styles["information"]}`}>
                      <div className={`${styles["contact-icon"]}`}>
                        <i
                          className={`${styles["fa-phone-alt"]} ${styles["fas"]}`}
                        ></i>
                      </div>
                      <p className={`${styles["info-text"]}`} id="phone">
                        {value?.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${styles["contact-phone"]}`}>
                  <h3 className={`${styles["title"]}`}>Contact me</h3>
                  <div className={`${styles["row"]}`}>
                    <input
                      type="text"
                      className={`${styles["contact-input"]}`}
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className={`${styles["contact-input"]}`}
                      placeholder="Last Name"
                    />
                  </div>

                  <div className={`${styles["row"]}`}>
                    <input
                      type="text"
                      className={`${styles["contact-input"]}`}
                      placeholder="Phone"
                    />
                    <input
                      type="email"
                      className={`${styles["contact-input"]}`}
                      placeholder="Email"
                    />
                  </div>

                  <div className={`${styles["row"]}`}>
                    <textarea
                      name="message"
                      className={`${styles["contact-input"]} ${styles["textarea"]}`}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <a href="#" className={`${styles["btn"]} ${styles["a"]}`}>
                    Send
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles["hireme"]}`} id="hireme">
            <div className={`${styles["container"]}`}>
              <h3 className={`${styles["title"]}`}>
                Let's talk about a project
              </h3>
              <p className={`${styles["text"]}`} id="hireme">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                culpa. Commodi suscipit animi officia dignissimos unde, ipsum
                fugiat consequuntur, fugit ratione vel aperiam, similique
                distinctio mollitia repellendus quasi rem vero!
              </p>
              <a href="#" className={`${styles["btn"]}`}>
                Hire me
              </a>
            </div>
          </section>
        </main>

        <footer className={`${styles["footer"]}`}>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["grid-4"]}`}>
              <div
                className={`${styles["grid-4-col"]} ${styles["footer-links"]}`}
              >
                <h3 className={`${styles["title-sm"]}`}>Links</h3>
                <ul className={`${styles["ul"]}`}>
                  <li>
                    <a href="#services" className={`${styles["a"]}`}>
                      Services
                    </a>
                  </li>

                  <li>
                    <a href="#about" className={`${styles["a"]}`}>
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className={`${styles["a"]}`}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className={`${styles["grid-4-col"]} ${styles["footer-links"]}`}
              >
                <h3 className={`${styles["title-sm"]}`}>Services</h3>
                <ul className={`${styles["ul"]}`}>
                  <li>
                    <a href="#" className={`${styles["a"]}`}>
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${styles["a"]}`}>
                      Web Dev
                    </a>
                  </li>
                  <li>
                    <a href="#" className={`${styles["a"]}`}>
                      App Design
                    </a>
                  </li>

                  <li>
                    <a href="#" className={`${styles["a"]}`}>
                      UI Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`${styles["bottom-footer"]}`}>
              <div className={`${styles["followme-wrap"]}`}>
                <div className={`${styles["followme"]}`}>
                  <h3>Follow me</h3>
                  <span className={`${styles["footer-line"]}`}></span>
                  <div className={`${styles["social-media"]}`}>
                    <a href="#" id="facebook" className={`${styles["a"]}`}>
                      <i
                        className={`${styles["fab"]} ${styles["fa-facebook-f"]}`}
                      ></i>
                    </a>
                    <a href="#" id="twitter" className={`${styles["a"]}`}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" id="instagram" className={`${styles["a"]}`}>
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" id="linkedin" className={`${styles["a"]}`}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>

                <div className={`${styles["back-btn-wrap"]}`}>
                  <a
                    href="#"
                    className={`${styles["back-btn"]} ${styles["a"]}`}
                  >
                    <i className="fas fa-chevron-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      </body>
    </>
  );
};

export default Template1;
