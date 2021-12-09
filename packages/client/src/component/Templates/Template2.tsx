import React from "react";
import styles from "../../styles/Template2.module.css";
import { FORM } from "../../types";

type Props = {
  value?: FORM;
  image?: any;
};

const Template2: React.FC<Props> = ({ value, image }) => {
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
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing Page With Light/Dark Mode</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </head>
      <body className={`${styles["body"]}`}>
        <main>
          <div className={`${styles["big-wrapper"]} ${styles["light"]} `}>
            <img alt="" className={`${styles["shape"]} ${styles["img"]} `} />

            <header>
              <div className={`${styles["container"]} `}>
                <div className={`${styles["logo"]} `}>
                  <img
                    src=".https://abhishsharmagit.github.io/portfolio-website/img/template2/logo.png"
                    alt="Logo"
                  />
                  <h3>Portfolio</h3>
                </div>

                <div className={`${styles["links"]} `}>
                  <ul className={`${styles["ul"]} `}>
                    <li className={`${styles["li"]} `}>
                      <a href="#" className={`${styles["a"]} `}>
                        Features
                      </a>
                    </li>
                    <li className={`${styles["li"]} `}>
                      <a href="#" className={`${styles["a"]} `}>
                        Pricing
                      </a>
                    </li>
                    <li className={`${styles["li"]} `}>
                      <a href="#" className={`${styles["a"]} `}>
                        Testimonials
                      </a>
                    </li>
                    <li className={`${styles["li"]} `}>
                      <a href="#" className={`${styles["btn"]} `}>
                        Sign up
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={`${styles["overlay"]} `}></div>

                <div className={`${styles["hamburger-menu"]} `}>
                  <div className={`${styles["bar"]} `}></div>
                </div>
              </div>
            </header>

            <div className={`${styles["showcase-area"]} `}>
              <div className={`${styles["container"]} `}>
                <div className={`${styles["left"]} `}>
                  <div className={`${styles["big-title"]} `}>
                    <h1>{value?.firstName}</h1>
                    <h1>{value?.profile}</h1>
                  </div>
                  <p className={`${styles["text"]} `}>{value?.description}</p>
                  <div className={`${styles["cta"]} `}>
                    <a href="#" className={`${styles["btn"]} `}>
                      Get started
                    </a>
                  </div>
                </div>

                <div className={`${styles["right"]} `}>
                  <img
                    src="https://abhishsharmagit.github.io/portfolio-website/img/template2/person.png"
                    alt="Person Image"
                    id="portfolioImage"
                    className={`${styles["person"]} `}
                  />
                </div>
              </div>
            </div>

            <div className={`${styles["bottom-area"]} `}>
              <div className={`${styles["container"]} `}>
                <button className={`${styles["toggle-btn"]} `}>
                  <i className={`${styles["far"]} ${styles["fa-moon"]} `}></i>
                  <i className={`${styles["far"]} ${styles["fa-sun"]} `}></i>
                </button>
              </div>
            </div>
          </div>

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

          <section className={`${styles["contact"]}`} id="contact">
            <div className={`${styles["container"]}`}>
              <div className={`${styles["contact-box"]}`}>
                <div className={`${styles["contact-info"]}`}>
                  <h3 className={`${styles["title"]}`}>Get in touch</h3>
                  <p className={`${styles["text"]}`} id="inTouch"></p>
                  <div className={`${styles["information-wrap"]}`}>
                    <div className={`${styles["information"]}`}>
                      <div className={`${styles["contact-icon"]}`}>
                        <i
                          className={`${styles["fa-map-marker-alt"]} ${styles["fas"]}`}
                        ></i>
                      </div>
                      <p className={`${styles["info-text"]}`} id="address"></p>
                    </div>

                    <div className={`${styles["information"]}`}>
                      <div className={`${styles["contact-icon"]}`}>
                        <i
                          className={`${styles["fa-paper-plane"]} ${styles["fas"]}`}
                        ></i>
                      </div>
                      <p className={`${styles["info-text"]}`} id="email"></p>
                    </div>

                    <div className={`${styles["information"]}`}>
                      <div className={`${styles["contact-icon"]}`}>
                        <i
                          className={`${styles["fa-phone-alt"]} ${styles["fas"]}`}
                        ></i>
                      </div>
                      <p className={`${styles["info-text"]}`} id="phone"></p>
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

        <script src="https://kit.fontawesome.com/a81368914c.js"></script>
        <script src="./app.js"></script>
      </body>
    </>
  );
};

export default Template2;
