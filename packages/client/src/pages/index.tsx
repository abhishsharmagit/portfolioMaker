import Cookies from "js-cookie";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";
import Script from "next/script";
import Head from "next/head";

const Home: NextPage = () => {
  const AuthURL: any = process.env.AUTH_URL;
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      Router.push(`/home/${token}`);
    }
  });
  return (
    <>
      {!token && (
        <div>
          <Head>
            <title>Portfolio Maker</title>

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
              crossOrigin="anonymous"
            />
            <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
              integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            ></Script>
          </Head>
          <>
            <nav className="navbar navbar-expand-lg">
              <div className="flex flex-row justify-around">
                <div className="text-5xl font-extrabold text-white">
                  Portfolio Maker
                </div>
                <div className="">
                  <Link href={"#home"}>
                    <button className="text-3xl mx-16 rounded-full px-5 py-2 border-4 border-yellow-400 hover:bg-yellow-400 hover:text-white">
                      Home
                    </button>
                  </Link>
                  <Link href={"#about"}>
                    <button className="text-3xl mx-16 rounded-full px-5 py-2 border-4 border-yellow-400 hover:bg-yellow-400 hover:text-white">
                      About
                    </button>
                  </Link>
                  <Link href={"#contact"}>
                    <button className="text-3xl mx-16 rounded-full px-5 py-2 border-4 border-yellow-400 hover:bg-yellow-400 hover:text-white">
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </nav>

            <section
              className="hero hero-bg d-flex justify-content-center align-items-center"
              id="home"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-text">
                      <h1 className="text-white" data-aos="fade-up">
                        Make Awesome Portfolio
                      </h1>
                      <Link href={AuthURL}>
                        <a
                          className="custom-btn btn-bg btn mt-3"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          Login With Github
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div
                      className="hero-image"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <img
                        src="images/working-girl.png"
                        className="img-fluid"
                        alt="working girl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about section-padding pb-0" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto col-md-10 col-12">
                    <div className="about-info">
                      <h2 className="mb-4" data-aos="fade-up">
                        the best <strong>Portfolio maker</strong> in world....
                      </h2>

                      <p className="mb-0" data-aos="fade-up">
                        This portfolio Maker contains many template u can choose
                        any template.
                        <br />
                        <br />
                      </p>
                    </div>
                    <div
                      className="about-image"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <img
                        src="images/office.png"
                        className="img-fluid"
                        alt="office"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="project section-padding" id="project">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <h2 className="mb-5 text-center" data-aos="fade-up">
                      Please take a look through our
                      <strong>Portfolio maker Servcies</strong>
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            <section className="testimonial section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-5 col-12">
                    <div className="contact-image" data-aos="fade-up">
                      <img
                        src="images/female-avatar.png"
                        className="img-fluid"
                        alt="website"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-7 col-12">
                    <h4
                      className="my-5 pt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Client Testimonials
                    </h4>

                    <div
                      className="quote"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    ></div>

                    <h2
                      className="mb-4"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Probably the best portfolio maker we used yet....
                    </h2>

                    <p data-aos="fade-up" data-aos-delay="400">
                      <strong>Mary Zoe</strong>

                      <span className="mx-1">/</span>

                      <small>MyUser (CEO)</small>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <footer className="site-footer" id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h1
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      We make creative <strong>Portfolio</strong> only.
                    </h1>
                  </div>

                  <div
                    className="col-lg-3 col-md-6 col-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4 className="my-4">Contact Info</h4>

                    <p className="mb-1">
                      <i className="fa fa-phone mr-2 footer-icon"></i>
                      123456879
                    </p>

                    <p>
                      <a href="#">
                        <i className="fa fa-envelope mr-2 footer-icon"></i>
                        abhisheksharma2013011@gmail.com
                      </a>
                    </p>
                  </div>

                  <div
                    className="col-lg-3 col-md-6 col-12"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h4 className="my-4">Github</h4>

                    <p className="mb-1">
                      <i className="fa fa-home mr-2 footer-icon"></i>
                      <a href="https://github.com/abhishsharmagit">
                        <i className="fa fa-envelope mr-2 footer-icon"></i>
                        Github
                      </a>
                    </p>
                  </div>

                  <div
                    className="col-lg-4 mx-lg-auto col-md-6 col-12"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <ul className="footer-link">
                      <li>
                        <a href="#">Stories</a>
                      </li>
                      <li>
                        <a href="#">Work with us</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </>
        </div>
      )}
    </>
  );
};

export default Home;
