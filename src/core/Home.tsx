import { Link } from "react-router-dom";
import { Label } from "reactstrap";

export default function Home() {
  return (
    <>
      <div className="preloader">
        <div className="preloader-body">
          <div className="cssload-container">
            <div className="cssload-speeding-wheel"></div>
          </div>
          <p>Loading...</p>
        </div>
      </div>

      <div className="page">
        <header className="section page-header">
          <div className="rd-navbar-wrap">
            <nav
              className="rd-navbar rd-navbar-classNameic"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fixed"
              data-md-device-layout="rd-navbar-fixed"
              data-lg-layout="rd-navbar-static"
              data-lg-device-layout="rd-navbar-static"
              data-xl-layout="rd-navbar-static"
              data-xl-device-layout="rd-navbar-static"
              data-lg-stick-up-offset="46px"
              data-xl-stick-up-offset="46px"
              data-xxl-stick-up-offset="46px"
              data-lg-stick-up="true"
              data-xl-stick-up="true"
              data-xxl-stick-up="true"
            >
              <div className="rd-navbar-main-outer">
                <div className="rd-navbar-main">
                  <div className="rd-navbar-panel">
                    <button
                      className="rd-navbar-toggle"
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                    >
                      <span></span>
                    </button>
                    <div className="rd-navbar-brand">
                      <a className="brand logo" href="index.html">
                        <img
                          className="brand-logo-dark"
                          src="images/rrs-logo.png"
                          alt=""
                        />
                        <img
                          className="brand-logo-light"
                          src="images/rrs-logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="rd-navbar-main-element">
                    <div className="rd-navbar-nav-wrap">
                      <ul className="rd-navbar-nav">
                        <li className="rd-nav-item active">
                          <a className="rd-nav-link" href="#">
                            Home
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#about">
                            About
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#feature">
                            Features
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#faq">
                            FAQ's
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#testimonial">
                            Testimonials
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="#contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <section className="section main-section parallax-scene-js section-hero">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="main-decorated-box">
                    <h1
                      className="text-white heading-main wow slideInLeft"
                      data-wow-delay=".2s"
                    >
                      Send money to Nepal From Australia with Low Charge &
                      excellent rates
                    </h1>
                    <a
                      href="https://invite.viber.com/?g2=AQAUJo9REza0YU8g9fQrPTSKWZRwLDYUeZOna78fUwz9IqerQNl5vhS2IQs%2Fa4ul"
                      className="btn btn-white wow slideInLeft mr-3"
                      data-wow-delay=".2s"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <title>Viber icon</title>
                        <path
                          d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36 2.6a.299.299 0 0 0-.3.299.3.3 0 0 0 .3.3 5.631 5.631 0 0 1 4.03 1.59c1.09 1.06 1.621 2.48 1.641 4.34a.3.3 0 0 0 .3.3v-.009a.3.3 0 0 0 .3-.3 6.451 6.451 0 0 0-1.81-4.76c-1.19-1.16-2.692-1.76-4.462-1.76zm-3.954.69a.955.955 0 0 0-.615.12h-.012c-.41.24-.788.54-1.148.94-.27.32-.421.639-.461.949a1.24 1.24 0 0 0 .05.541l.02.01a13.722 13.722 0 0 0 1.2 2.6 15.383 15.383 0 0 0 2.32 3.171l.03.04.04.03.03.03.03.03a15.603 15.603 0 0 0 3.18 2.33c1.32.72 2.122 1.06 2.602 1.2v.01c.14.04.268.06.398.06a1.84 1.84 0 0 0 1.102-.472c.39-.35.7-.738.93-1.148v-.01c.23-.43.15-.841-.18-1.121a13.632 13.632 0 0 0-2.15-1.54c-.51-.28-1.03-.11-1.24.17l-.45.569c-.23.28-.65.24-.65.24l-.012.01c-3.12-.8-3.95-3.959-3.95-3.959s-.04-.43.25-.65l.56-.45c.27-.22.46-.74.17-1.25a13.522 13.522 0 0 0-1.54-2.15.843.843 0 0 0-.504-.3zm4.473.89a.3.3 0 0 0 .002.6 3.78 3.78 0 0 1 2.65 1.15 3.5 3.5 0 0 1 .9 2.57.3.3 0 0 0 .3.299l.01.012a.3.3 0 0 0 .3-.301c.03-1.19-.34-2.19-1.07-2.99-.73-.8-1.75-1.25-3.05-1.34a.3.3 0 0 0-.042 0zm.49 1.619a.305.305 0 0 0-.018.611c.99.05 1.47.55 1.53 1.58a.3.3 0 0 0 .3.29h.01a.3.3 0 0 0 .29-.32c-.07-1.34-.8-2.091-2.1-2.161a.305.305 0 0 0-.012 0z"
                          fill="#232323"
                        />
                      </svg>
                      Join Viber Group
                    </a>

                    <a
                      className="btn btn-outline-white"
                      href="https://registeredremit.com.au/send-money/create"
                    >
                      Send Money
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="media-wrapper wow slideInRight"
                    data-wow-delay=".3s"
                  >
                    <img src="./images/used/hero-banner.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="decorate-layer">
            <div className="layer-1">
              <div className="layer" data-depth=".20">
                <img
                  src="images/parallax-item-1-563x532.png"
                  alt=""
                  width="563"
                  height="266"
                />
              </div>
            </div>
            <div className="layer-2">
              <div className="layer" data-depth=".30">
                <img
                  src="images/parallax-item-2-276x343.png"
                  alt=""
                  width="276"
                  height="171"
                />
              </div>
            </div>
            <div className="layer-3">
              <div className="layer" data-depth=".40">
                <img
                  src="images/parallax-item-3-153x144.png"
                  alt=""
                  width="153"
                  height="72"
                />
              </div>
            </div>
            <div className="layer-4">
              <div className="layer" data-depth=".20">
                <img
                  src="images/parallax-item-4-69x74.png"
                  alt=""
                  width="69"
                  height="37"
                />
              </div>
            </div>
            <div className="layer-5">
              <div className="layer" data-depth=".40">
                <img
                  src="images/parallax-item-5-72x75.png"
                  alt=""
                  width="72"
                  height="37"
                />
              </div>
            </div>
            <div className="layer-6">
              <div className="layer" data-depth=".30">
                <img
                  src="images/parallax-item-6-45x54.png"
                  alt=""
                  width="45"
                  height="27"
                />
              </div>
            </div>
          </div> */}
          </section>

          <section className="section section-sm position-relative" id="about">
            <div className="container">
              <div className="row row-30">
                <div className="col-lg-6">
                  <div
                    className="block-decorate-img wow fadeInTop"
                    data-wow-delay=".2s"
                  >
                    <img
                      src="images/used/about.jpg"
                      alt=""
                      width="570"
                      height="351"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="block-sm offset-top-45">
                    <div
                      className="section-name wow fadeInRight"
                      data-wow-delay=".2s"
                    >
                      About us
                    </div>
                    <h3
                      className="wow fadeInLeft text-capitalize devider-bottom"
                      data-wow-delay=".3s"
                    >
                      What We<span className="text-primary"> Do</span>
                    </h3>
                    <p
                      className="offset-xl-40 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      An Australia based AUSTRAC Registered Money transfer
                      Company with, more than thousands corporate and individual
                      clients depends on Registered Remit for their best
                      services to handle their millions of dollars in foreign
                      currency transactions every year in an international
                      Market.
                    </p>
                    <p
                      className="default-letter-spacing font-weight-bold text-gray-dark wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      We have thrive for a successful experience in financial
                      sphere in the remittance market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section custom-section position-relative section-md"
            id="feature"
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-12">
                  <div className="section-name wow fadeInRight">
                    our features
                  </div>
                  <h3
                    className="text-capitalize devider-left wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    Why People<span className="text-primary"> Choose us</span>
                  </h3>
                  <p>
                    We are devoted to serve Nepalese all over Nepal from
                    Australia via our simple and systematic remittance
                    facilities. Ensuring to provide fast,cheap and reliable
                    service is our foremost purpose.
                  </p>
                  <div className="row row-15">
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="box-default">
                        <div className="box-default-title">24/7 Service</div>
                        <p className="box-default-description">
                          Our services are available for your convenience 24/7
                        </p>
                        <span className="box-default-icon novi-icon icon-lg mercury-icon-lightbulb-gears"></span>
                      </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="box-default">
                        <div className="box-default-title">
                          Low fee & Best Rates
                        </div>
                        <p className="box-default-description">
                          We make sure that our clients get the best rates with
                          the lowest fee
                        </p>
                        <span className="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
                      </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="box-default">
                        <div className="box-default-title">
                          Certified by Austrac
                        </div>
                        <p className="box-default-description">
                          We have officially been certified by the Austrac
                          Authority
                        </p>
                        <span className="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
                      </div>
                    </div>
                    <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="box-default">
                        <div className="box-default-title">Quick & Easy</div>
                        <p className="box-default-description">
                          Our goal is to make remittance seamless, quick and
                          easy
                        </p>
                        <span className="box-default-icon novi-icon icon-lg mercury-icon-partners"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="image-left-side wow slideInRight"
              data-wow-delay=".5s"
            >
              <img
                src="images/used/docusign-7RWBSYA9Rro-unsplash.jpg"
                alt=""
                width="636"
                height="240"
              />
            </div>
          </section>

          <section
            className="section section-md bg-xs-overlay section-hero"
            id="faq"
          >
            <div className="container">
              <div className="row row-50 justify-content-center">
                <div className="col-12 text-center col-md-10 col-lg-8">
                  <div
                    className="section-name text-white font-weight-bold wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    FAQ's
                  </div>
                  <h3
                    className="text-white wow fadeInLeft text-capitalize"
                    data-wow-delay=".3s"
                  >
                    Frequently Asked Queries
                  </h3>
                </div>
              </div>
              <div className="row row-30 justify-content-center">
                <div className="col-md-8">
                  <div
                    className="accordion wow fadeInDown"
                    data-wow-delay=".3s"
                    id="accordionExample"
                  >
                    <div className="card border-0 rounded-0 mb-3">
                      <div className="card-header bg-white" id="headingOne">
                        <div
                          className="d-flex align-items-center"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <h2 className="mb-0 flex-grow-1 mr-3">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                            >
                              What is Registered Remit Sydney?
                            </button>
                          </h2>
                          <i className="fas fa-chevron-circle-down icon-md"></i>
                        </div>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Registered Remit Sydney is a money transfer service
                          that ensures to provide a secure way of sending money
                          to Nepal.
                        </div>
                      </div>
                    </div>
                    <div className="card border-0 rounded-0 mb-3">
                      <div className="card-header" id="headingTwo">
                        <div
                          className="d-flex align-items-center"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <h2 className="mb-0 flex-grow-1 mr-3">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                            >
                              How to transfer money from our application?
                            </button>
                          </h2>
                          <i className="fas fa-chevron-circle-down icon-md"></i>
                        </div>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          To Transfer Money You need to create an account or you
                          can also directly contact us on Viber.
                        </div>
                      </div>
                    </div>
                    <div className="card border-0 rounded-0">
                      <div className="card-header" id="headingThree">
                        <div
                          className="d-flex align-items-center"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <h2 className="mb-0 flex-grow-1 mr-3">
                            <button
                              className="btn btn-link btn-block text-left"
                              type="button"
                            >
                              What are your support hours?
                            </button>
                          </h2>
                          <i className="fas fa-chevron-circle-down icon-md"></i>
                        </div>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">We are open 24/7 hours.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section section-md bg-gray-lighten"
            id="testimonial"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div
                    className="section-name wow fadeInRight text-center"
                    data-wow-delay=".2s"
                  >
                    testimonials
                  </div>
                  <h3
                    className="wow fadeInLeft text-capitalize text-center"
                    data-wow-delay=".3s"
                  >
                    What People Say
                    <span className="text-primary"> About Us</span>
                  </h3>
                  <div
                    className="owl-carousel review-carousel"
                    data-items="1"
                    data-sm-items="1"
                    data-md-items="1"
                    data-lg-items="1"
                    data-xl-items="1"
                    data-xxl-items="1"
                    data-dots="true"
                    data-nav="false"
                    data-stage-padding="0"
                    data-loop="false"
                    data-margin="0"
                    data-mouse-drag="true"
                    data-autoplay="false"
                  >
                    <div className="item">
                      <div
                        className="item-preview wow fadeInDown avatar"
                        data-wow-delay=".2s"
                      >
                        <img src="images/used/img1.jpg" alt="" />
                      </div>
                      <div
                        className="item-description wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <p>
                          I was quite amazed by their service.I really do
                          appreciate their work speed. I would like to recommend
                          to all the people to transaction with Registered
                          Remit. It is simply the best remit available
                        </p>
                        <div className="item-subsection">
                          <span className="item-subsection-title devider-left">
                            Suman Bista
                          </span>
                          <span>Regular Client</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="item-preview wow fadeInDown avatar"
                        data-wow-delay=".2s"
                      >
                        <img src="images/used/img2.jpg" alt="" />
                      </div>
                      <div
                        className="item-description wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <p>
                          I know Registered Remit for more than a years and have
                          been consistently impressed by the work that they have
                          done. Registered Remit had always been my favorite to
                          send money to my family in Nepal Thank you, Registered
                          Remit, for hassle free transactions
                        </p>
                        <div className="item-subsection">
                          <span className="item-subsection-title devider-left">
                            Anish Ojha
                          </span>
                          <span>Founder Registered Remit</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div
                        className="item-preview wow fadeInDown avatar"
                        data-wow-delay=".2s"
                      >
                        <img src="images/used/img3.jpg" alt="" />
                      </div>
                      <div
                        className="item-description wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Iusto optio vero vitae, corporis rem, quod id
                          odio asperiores sapiente ratione fugit cumque aliquam
                          dolores ipsam adipisci nisi consectetur neque velit?
                        </p>
                        <div className="item-subsection">
                          <span className="item-subsection-title devider-left">
                            Anthony Parker
                          </span>
                          <span>Regular Client</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-quote position-relative py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center d-flex justify-content-center align-items-center flex-column">
                  <h3
                    className="text-white mb-4 wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    Fast ▶️ Convenient ▶️ Secure ▶️ Confidential
                  </h3>
                  <div
                    className="d-flex align-items-center wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Viber icon</title>
                      <path
                        d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36 2.6a.299.299 0 0 0-.3.299.3.3 0 0 0 .3.3 5.631 5.631 0 0 1 4.03 1.59c1.09 1.06 1.621 2.48 1.641 4.34a.3.3 0 0 0 .3.3v-.009a.3.3 0 0 0 .3-.3 6.451 6.451 0 0 0-1.81-4.76c-1.19-1.16-2.692-1.76-4.462-1.76zm-3.954.69a.955.955 0 0 0-.615.12h-.012c-.41.24-.788.54-1.148.94-.27.32-.421.639-.461.949a1.24 1.24 0 0 0 .05.541l.02.01a13.722 13.722 0 0 0 1.2 2.6 15.383 15.383 0 0 0 2.32 3.171l.03.04.04.03.03.03.03.03a15.603 15.603 0 0 0 3.18 2.33c1.32.72 2.122 1.06 2.602 1.2v.01c.14.04.268.06.398.06a1.84 1.84 0 0 0 1.102-.472c.39-.35.7-.738.93-1.148v-.01c.23-.43.15-.841-.18-1.121a13.632 13.632 0 0 0-2.15-1.54c-.51-.28-1.03-.11-1.24.17l-.45.569c-.23.28-.65.24-.65.24l-.012.01c-3.12-.8-3.95-3.959-3.95-3.959s-.04-.43.25-.65l.56-.45c.27-.22.46-.74.17-1.25a13.522 13.522 0 0 0-1.54-2.15.843.843 0 0 0-.504-.3zm4.473.89a.3.3 0 0 0 .002.6 3.78 3.78 0 0 1 2.65 1.15 3.5 3.5 0 0 1 .9 2.57.3.3 0 0 0 .3.299l.01.012a.3.3 0 0 0 .3-.301c.03-1.19-.34-2.19-1.07-2.99-.73-.8-1.75-1.25-3.05-1.34a.3.3 0 0 0-.042 0zm.49 1.619a.305.305 0 0 0-.018.611c.99.05 1.47.55 1.53 1.58a.3.3 0 0 0 .3.29h.01a.3.3 0 0 0 .29-.32c-.07-1.34-.8-2.091-2.1-2.161a.305.305 0 0 0-.012 0z"
                        fill="white"
                      />
                    </svg>
                    <h6 className="text-white ml-3">
                      Join Registered Remit Sydney on
                      <a
                        target="_blank"
                        href="https://invite.viber.com/?g2=AQAUJo9REza0YU8g9fQrPTSKWZRwLDYUeZOna78fUwz9IqerQNl5vhS2IQs%2Fa4ul"
                        className="text-underline"
                      >
                        Viber
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-contact" id="contact">
            <div className="container">
              <div
                className="text-center section-name wow fadeInRight"
                data-wow-delay=".2s"
              >
                Connect With Us
              </div>
              <h3
                className="wow fadeInLeft text-capitalize text-center mb-4"
                data-wow-delay=".3s"
              >
                Our Contact
              </h3>
              <div
                className="media-wrapper mb-4 mb-md-0 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0099190961673!2d151.10183476560894!3d-33.889398380650626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bae59600348f%3A0x5017d681632aeb0!2sBurwood%20Heights%20NSW%202136%2C%20Australia!5e0!3m2!1sen!2snp!4v1652934076942!5m2!1sen!2snp"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 mb-3 mb-md-0">
                  <div className="wow fadeInRight" data-wow-delay=".2s">
                    <svg
                      viewBox="0 0 447 331"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5627_101815)">
                        <path
                          d="M403.7 324.7C451.2 288.6 472.3 188.5 395.2 139.4C344.2 106.9 312.4 125.4 255 103.9C184.9 77.6999 174.4 -1.60012 89.1002 37.3999C44.0002 58.0999 12.6002 116.3 7.10015 182.5C1.70015 247.3 24.7001 291.8 71.6002 322.2C181.9 326.9 292.3 326 403.7 324.7Z"
                          fill="#99D3FF"
                        />
                        <path
                          d="M208.6 39.9002C201.4 68.7002 228.1 97.2002 256.1 109C284.2 120.8 316.3 119.4 346.4 113.8C359.4 111.4 372.7 107.9 382.8 99.7002C392.9 91.4002 398.7 77.1002 393.2 65.5002C388.3 55.3002 376.5 50.0002 365.1 47.3002C353.8 44.6002 341.8 43.5002 331.7 37.8002C322.1 32.4002 315.4 23.5002 307.1 16.5002C291.7 3.50019 270.2 -2.89981 250.2 1.20019C230.2 5.30019 214.7 15.4002 208.6 39.9002Z"
                          fill="#99D3FF"
                        />
                        <path
                          d="M423.401 172.4V150.6H415.101C414.101 146.8 412.601 143.2 410.701 139.9L416.501 134L401.101 118.6L395.201 124.4C391.901 122.5 388.301 120.9 384.501 120V111.7H362.701V120C358.901 121 355.301 122.5 352.001 124.4L346.101 118.6L330.801 134L336.601 139.9C334.701 143.2 333.201 146.8 332.201 150.6H324.001V172.4H332.301C333.301 176.2 334.801 179.8 336.701 183.1L330.901 189L346.301 204.4L352.201 198.6C355.501 200.5 359.101 202 362.901 203V211.3H384.701V203C388.501 202 392.101 200.5 395.401 198.6L401.301 204.4L416.701 189L410.901 183.1C412.801 179.8 414.401 176.2 415.301 172.4H423.401ZM373.701 180.4C363.301 180.4 354.801 171.9 354.801 161.5C354.801 151.1 363.301 142.6 373.701 142.6C384.101 142.6 392.601 151.1 392.601 161.5C392.601 171.9 384.101 180.4 373.701 180.4Z"
                          fill="#008BF5"
                        />
                        <path
                          d="M235.801 146.1V129.1C235.801 124.5 239.601 120.7 244.201 120.7H297.801C302.401 120.7 306.201 124.5 306.201 129.1V146.1C306.201 150.7 302.401 154.5 297.801 154.5H244.301C239.501 154.5 235.801 150.7 235.801 146.1Z"
                          fill="#0074CC"
                        />
                        <path
                          d="M258.401 145.2L232.501 170.5L274.501 149.2"
                          fill="#0074CC"
                        />
                        <path
                          d="M242.301 128.7C242.301 127.9 242.901 127.4 243.601 127.4H270.001C270.701 127.4 271.301 128 271.301 128.7V128.8C271.301 129.5 270.701 130.1 270.001 130.1H243.501C242.801 129.9 242.301 129.4 242.301 128.7Z"
                          fill="white"
                        />
                        <path
                          d="M272.4 128.7C272.4 127.9 273 127.4 273.7 127.4H296.8C297.5 127.4 298.1 128 298.1 128.7V128.8C298.1 129.5 297.5 130.1 296.8 130.1H273.7C273 129.9 272.4 129.4 272.4 128.7Z"
                          fill="white"
                        />
                        <path
                          d="M262.301 134.401C262.301 133.601 262.901 133.101 263.601 133.101H296.801C297.501 133.101 298.101 133.701 298.101 134.401V134.501C298.101 135.201 297.501 135.801 296.801 135.801H263.601C262.901 135.601 262.301 135.101 262.301 134.401Z"
                          fill="white"
                        />
                        <path
                          d="M242.301 134.401C242.301 133.601 242.901 133.101 243.601 133.101H258.401C259.101 133.101 259.701 133.701 259.701 134.401V134.501C259.701 135.201 259.101 135.801 258.401 135.801H243.601C242.801 135.601 242.301 135.101 242.301 134.401Z"
                          fill="white"
                        />
                        <path
                          d="M266.9 140.101C266.9 139.301 267.5 138.801 268.2 138.801H296.8C297.5 138.801 298.1 139.401 298.1 140.101V140.201C298.1 140.901 297.5 141.501 296.8 141.501H268.2C267.5 141.301 266.9 140.701 266.9 140.101Z"
                          fill="white"
                        />
                        <path
                          d="M242.301 140.101C242.301 139.301 242.901 138.801 243.601 138.801H263.401C264.101 138.801 264.701 139.401 264.701 140.101V140.201C264.701 140.901 264.101 141.501 263.401 141.501H243.601C242.801 141.301 242.301 140.701 242.301 140.101Z"
                          fill="white"
                        />
                        <path
                          d="M242.301 145.7C242.301 144.9 242.901 144.4 243.601 144.4H250.901C251.601 144.4 252.201 145 252.201 145.7V145.8C252.201 146.5 251.601 147.1 250.901 147.1H243.601C242.801 147 242.301 146.4 242.301 145.7Z"
                          fill="white"
                        />
                        <path
                          d="M254.701 145.7C254.701 144.9 255.301 144.4 256.001 144.4H296.901C297.601 144.4 298.201 145 298.201 145.7V145.8C298.201 146.5 297.601 147.1 296.901 147.1H256.001C255.201 147 254.701 146.4 254.701 145.7Z"
                          fill="white"
                        />
                        <path
                          d="M209.601 264.1C209.601 264.1 211.801 284.2 214.201 285.8C218.601 288.7 269.301 295.4 269.301 295.4L267.601 308.6C267.601 308.6 198.201 314.8 195.201 311.4C190.101 305.4 181.101 276.3 181.101 276.3L209.601 264.1Z"
                          fill="#E06A58"
                        />
                        <path
                          d="M176.101 212.5L181.701 199C181.701 199 196.901 206.1 201.901 215C207.301 224.4 213.801 274.6 213.801 274.6C213.801 274.6 186.901 280.8 182.001 278.2C177.101 275.6 176.101 212.5 176.101 212.5Z"
                          fill="#F2AE30"
                        />
                        <path
                          d="M133.401 149.9C129.501 148.5 125.301 147.2 121.101 147.5C116.901 147.8 112.601 150.1 111.201 153.8C110.201 156.4 110.601 159.5 109.001 161.9C107.501 164.2 104.401 165.1 101.501 165.3C98.6007 165.5 95.7007 165.1 92.9007 165.5C84.1007 166.7 77.8007 176.2 80.7007 184.1C81.9007 187.2 84.2007 190.2 83.7007 193.4C83.1007 196.9 79.5007 199.2 78.0007 202.4C76.0007 206.7 78.4007 211.9 82.3007 214.8C86.2007 217.7 91.3007 218.8 96.3007 219.6C103.101 220.6 110.201 221.1 116.901 219.7C123.601 218.3 130.101 214.7 133.601 209.1C135.201 206.6 136.101 203.9 137.901 201.5C141.601 196.7 148.201 194.9 153.401 191.5C159.101 187.8 163.201 180.6 159.901 174.9C156.701 169.5 148.301 168.3 144.901 162.9C143.501 160.7 143.201 158.1 142.301 155.6C141.401 153.3 139.201 152.1 133.401 149.9Z"
                          fill="#0A2240"
                        />
                        <path
                          d="M156.3 216.6C157.3 217.7 158.5 219 160.1 219.1C161.8 219.2 163.2 218 164.3 216.8C170 210.8 173.7 203.4 175.2 195.8C173.8 195 172.4 194.2 171.2 193.5C170.1 192.8 169.2 191.9 168.7 190.8C168.4 190 168.2 189.1 168.3 188.2C169.1 180.7 169.8 176.5 172.4 168.9C159.9 166.1 148 162.7 141.2 157C140.4 160.5 139.4 167.4 137.3 174.1C135.1 181.3 131.6 188.4 125.7 191.5C137.4 198.3 147.7 206.8 156.3 216.6Z"
                          fill="#F9A07B"
                        />
                        <path
                          d="M168.4 188.2C168.3 189.1 168.4 190 168.8 190.8C161.4 199.8 144.8 188 137.5 174.1C139.6 167.3 140.6 160.5 141.4 157C148.2 162.7 160 166.1 172.6 168.9C169.9 176.5 169.2 180.7 168.4 188.2Z"
                          fill="#E06A58"
                        />
                        <path
                          d="M189 297C187.4 307.9 199.1 319.6 199.4 325.4C174.5 325.4 122.4 326.9 95.8003 323.3C94.6003 316.6 107.7 301.5 107.7 286.7C107.7 284.7 107.6 282.6 107.5 280.2C107.1 273.6 106.1 265.7 105 257.6C102 235.9 98.1003 212.6 101 207.8C106.7 198.4 120 192 126.6 189.3C128.9 188.4 130.4 187.8 130.5 187.8C138.8 201.9 155.7 214 162 213.5C163.8 213.4 169 211.5 172.5 194.1C173.9 194.9 175.2 195.6 176.5 196.3C183.1 199.7 189.3 202.6 191 207C195.7 218.6 200.3 247.9 199.3 258.3C198.3 268.8 194 276.8 191.1 287.4C190.4 289.9 189.8 292.5 189.3 295.3C189.2 295.7 189.1 296.3 189 297Z"
                          fill="#FFC73C"
                        />
                        <path
                          d="M199.4 325.3C174.5 325.3 122.4 326.8 95.8003 323.2C94.6003 316.5 107.7 301.4 107.7 286.6C107.7 284.6 107.6 282.5 107.5 280.1C107.1 273.5 106.1 265.6 105 257.5C109.7 262.5 116.6 241.5 119.6 247.6C136.1 280.8 149 289.5 171.6 289.5C178.3 289.5 184.5 288.6 191.2 287.1C190.5 289.6 189.9 292.2 189.4 295C189.3 295.6 189.2 296.3 189.1 297C187.4 307.8 199.1 319.5 199.4 325.3Z"
                          fill="#FFBB33"
                        />
                        <path
                          d="M176.601 196.1C175.501 203.9 172.401 214.3 163.101 217.1C150.601 220.8 132.601 197.6 126.601 189.2C128.901 188.3 130.401 187.7 130.501 187.7C138.801 201.8 155.701 213.9 162.001 213.4C163.801 213.3 169.001 211.4 172.501 194C173.901 194.7 175.201 195.4 176.601 196.1Z"
                          fill="#FCE172"
                        />
                        <path
                          d="M181.701 313.699L181.601 322.299L336.601 323.199L336.901 313.399L181.701 313.699Z"
                          fill="#00467A"
                        />
                        <path
                          d="M403.801 236.3L400.301 232.8L287.401 232.1L230.801 314L233.701 316.4L403.801 236.3Z"
                          fill="#00467A"
                        />
                        <path
                          d="M289.601 235.1L233.701 316.4L340.401 316.9L403.801 236.3L289.601 235.1Z"
                          fill="#005392"
                        />
                        <path
                          d="M316.6 287C323.449 287 329 284.224 329 280.8C329 277.375 323.449 274.6 316.6 274.6C309.752 274.6 304.2 277.375 304.2 280.8C304.2 284.224 309.752 287 316.6 287Z"
                          fill="#99D3FF"
                        />
                        <path
                          d="M206.564 159.123C208.324 149.676 204.69 141.074 198.446 139.911C192.202 138.747 185.713 145.462 183.952 154.91C182.192 164.357 185.826 172.959 192.07 174.122C198.314 175.286 204.803 168.571 206.564 159.123Z"
                          fill="#56C4F9"
                        />
                        <path
                          d="M206.501 129.4C205.301 137.6 201.701 146.7 196.301 156.7C194.401 148.5 193.201 138.5 191.601 128.5C189.901 118.5 187.801 108.5 184.001 100.3C183.201 98.5 182.201 96.8 181.301 95.2C183.501 95 185.701 95.2 187.901 95.8C191.201 96.7 194.301 98.4 196.901 100.7C201.101 104.5 204.001 109.6 205.701 115C207.001 119.5 207.301 124.3 206.501 129.4Z"
                          fill="#0B2D50"
                        />
                        <path
                          d="M200.3 137.9C200.2 139.5 200.1 141.2 200 142.8C197.7 169.4 186.6 187.6 169.5 187.6C145.4 187.6 129.7 160.5 129.7 134C129.7 107.8 145.7 88.8998 164.5 91.0998C175.3 92.2998 183.2 95.8998 188.8 101.2C192.5 104.7 195.2 108.9 197 113.7C199.1 119.1 200.1 125.2 200.3 131.8C200.3 131.8 200.3 131.8 200.3 131.9C200.3 133.9 200.3 135.9 200.3 137.9Z"
                          fill="#F9A07B"
                        />
                        <path
                          d="M200.301 137.9C199.601 135.3 198.501 132.8 197.001 130.6C182.801 138 165.801 140.9 149.701 138.2C146.601 140.8 143.601 143.3 140.601 145.8C140.701 133.7 140.801 125.5 145.501 119.6C149.901 114.1 157.301 112 164.301 111.1C172.201 110.1 180.201 110.1 188.101 111.3C191.101 111.7 194.201 112.4 196.901 113.9C199.001 119.3 200.001 125.4 200.201 132C200.201 132 200.201 132 200.201 132.1C200.301 133.9 200.301 135.9 200.301 137.9Z"
                          fill="#E06A58"
                        />
                        <path
                          d="M203.7 121.6C200.4 124.4 196.2 126.7 191.6 128.6C178.3 134 161.1 135.7 147.7 135.1C141.1 149.6 138.4 154.8 136.7 167.5C130.3 161.4 125 150.4 123.4 141.7C121.9 133 122 123.9 124.4 115.4C128.2 102 137.8 94.6998 144.5 91.1998C146.2 90.2998 147.7 89.6998 148.8 89.1998C157.3 85.8998 166.9 86.1998 175.6 88.8998C180.4 90.3998 184.4 92.8998 187.7 95.9998C194.5 102.2 198.7 110.5 201.4 116.7C202.5 118.4 203.2 120.2 203.7 121.6Z"
                          fill="#0B2D50"
                        />
                        <path
                          d="M206.5 129.4C205.9 126.5 205.1 123.7 204 120.9C203.3 119.4 202.6 117.9 201.6 116.4C198.6 111.6 194.2 107.7 188.8 106C187.3 103.9 185.7 101.9 184 100.2C177.9 94 170.8 90.5 163.3 89.3C157 88.3 150.5 88.9 144.5 90.9C146.2 90 147.7 89.4 148.8 88.9C157.3 85.6 166.9 85.9 175.6 88.6C180.4 90.1 184.4 92.6 187.7 95.7C191 96.6 194.1 98.3 196.7 100.6C200.9 104.4 203.8 109.5 205.5 114.9C207 119.5 207.3 124.3 206.5 129.4Z"
                          fill="#225570"
                        />
                        <path
                          d="M155.4 145.8C159.9 143.2 164.5 142.1 171 144.5"
                          stroke="#0B2D50"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M185.9 145.599C189.7 142.699 195.4 142.499 198.3 145.599"
                          stroke="#0B2D50"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M181.3 160.1C181.7 162.1 181.5 166.6 180.5 168.6"
                          stroke="#CC454E"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M166.2 161.499C167.195 161.499 168 160.201 168 158.599C168 156.998 167.195 155.699 166.2 155.699C165.206 155.699 164.4 156.998 164.4 158.599C164.4 160.201 165.206 161.499 166.2 161.499Z"
                          fill="#262D40"
                        />
                        <path
                          d="M190.3 160.1C191.294 160.1 192.1 158.801 192.1 157.2C192.1 155.598 191.294 154.3 190.3 154.3C189.306 154.3 188.5 155.598 188.5 157.2C188.5 158.801 189.306 160.1 190.3 160.1Z"
                          fill="#262D40"
                        />
                        <path
                          d="M179 172.599C179 172.599 178.6 173.299 177.9 174.299C176.8 175.699 175 177.699 172.5 178.499C171.4 178.799 170.3 178.999 169 178.699C165.2 177.999 164.2 174.599 164.1 171.899C164.1 171.399 164.1 170.899 164.1 170.499C164.1 169.399 164.2 168.699 164.2 168.699C170.2 171.899 179 172.599 179 172.599Z"
                          fill="#CC454E"
                        />
                        <path
                          d="M179 172.599C179 172.599 178.6 173.299 177.9 174.299C174.8 174.299 168.6 172.699 164 170.499C164 169.399 164.1 168.699 164.1 168.699C170.2 171.899 179 172.599 179 172.599Z"
                          fill="white"
                        />
                        <path
                          d="M172.5 178.399C171.4 178.699 170.3 178.899 169 178.599C165.2 177.899 164.2 174.499 164.1 171.799C165.9 171.999 167.7 172.699 169.1 173.799C170.7 175.099 171.9 176.599 172.5 178.399Z"
                          fill="#E8729B"
                        />
                        <path
                          d="M136.801 141.2C136.801 141.2 136.601 128.7 141.801 116.3C148.301 100.7 161.601 94.1001 174.401 93.6001C189.901 93.0001 199.601 103.5 199.601 103.5C199.601 103.5 194.501 94.6001 184.601 92.0001C178.101 90.3001 168.201 90.1001 160.301 93.3001C152.101 96.6001 142.001 105.8 138.301 115.5C134.601 125.2 132.801 140.3 132.801 140.3L136.801 141.2Z"
                          fill="#3D86E0"
                        />
                        <path
                          d="M136.485 173.599C143.132 172.908 147.673 164.199 146.628 154.147C145.583 144.095 139.347 136.506 132.701 137.197C126.054 137.888 121.513 146.597 122.558 156.649C123.603 166.702 129.839 174.29 136.485 173.599Z"
                          fill="#56C4F9"
                        />
                        <path
                          d="M133.446 170.351C137.761 169.703 140.34 163.067 139.208 155.53C138.075 147.993 133.659 142.409 129.345 143.058C125.03 143.706 122.45 150.341 123.583 157.878C124.715 165.415 129.131 171 133.446 170.351Z"
                          fill="#3D86E0"
                        />
                        <path
                          d="M174.501 188.101C178.035 188.101 180.901 186.31 180.901 184.101C180.901 181.891 178.035 180.101 174.501 180.101C170.966 180.101 168.101 181.891 168.101 184.101C168.101 186.31 170.966 188.101 174.501 188.101Z"
                          fill="#3A92C9"
                        />
                        <path
                          d="M142.2 170.7C142.2 170.7 151.7 182.9 168.1 184.1"
                          stroke="#3A92C9"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M181.601 290.5L181.001 306.5C181.001 306.5 123.201 323.8 113.601 318.4C108.901 315.7 104.601 301 101.301 286.6C97.9012 271.5 95.7012 256.8 95.7012 256.8L129.601 250.2C129.601 250.2 129.601 270.9 130.801 282.8C131.201 287.2 131.801 290.5 132.601 291C135.601 292.9 181.601 290.5 181.601 290.5Z"
                          fill="#F9A07B"
                        />
                        <path
                          d="M130.801 282.701C124.601 284.701 112.801 287.801 101.301 286.601C97.9012 271.501 95.7012 256.801 95.7012 256.801L129.601 250.201C129.601 250.001 129.701 270.701 130.801 282.701Z"
                          fill="#E06A58"
                        />
                        <path
                          d="M179.901 290.701C188.501 288.901 203.101 284.401 209.101 282.901C213.401 281.801 224.601 287.601 227.501 293.001C228.801 295.401 230.001 308.901 225.501 307.501C223.301 306.801 223.601 301.001 222.901 298.701C222.301 296.801 220.501 294.901 217.701 293.301C219.601 297.901 219.501 301.901 219.301 306.901C219.301 308.001 219.201 309.201 218.701 310.101C218.201 311.101 217.001 311.701 216.001 311.301C215.001 310.901 214.601 309.601 214.401 308.501C213.601 304.701 212.801 300.801 212.501 296.501C212.601 300.801 212.501 305.001 212.201 309.301C212.001 312.601 210.401 314.301 208.401 313.801C207.501 313.501 207.101 312.701 206.801 311.701C206.201 313.801 204.701 316.101 202.801 315.201C201.601 314.701 200.901 310.401 201.101 306.001C197.401 308.301 193.201 309.301 188.301 309.501C184.001 309.701 179.501 308.901 176.901 305.901C177.201 301.301 178.801 294.501 179.901 290.701Z"
                          fill="#F9A07B"
                        />
                        <path
                          d="M207.002 311.001C207.302 307.501 207.002 304.001 206.102 300.701"
                          stroke="#CC454E"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M125.801 216.5C123.301 209.6 114.301 195.4 114.301 195.4C114.301 195.4 100.501 201.1 95.7007 210.8C87.4007 227.2 91.6007 274.4 91.6007 274.4C102.701 279.1 125.101 279.1 134.601 277.8C134.701 277.9 130.801 230.4 125.801 216.5Z"
                          fill="#FFC73C"
                        />
                        <path
                          d="M127.601 219.4C131.401 237.3 133.401 254.1 134.001 270.5"
                          stroke="#F2AE30"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M421.901 320.4H27.6006V330.3H421.901V320.4Z"
                          fill="#005392"
                        />
                      </g>
                      <defs>
                        {/* <clipPath id="clip0_5627_101815">
                        <rect width="446.3" height="330.3" fill="white" />
                      </clipPath> */}
                      </defs>
                    </svg>
                  </div>
                  <div className="row">
                    <div
                      className="col-sm-6 fadeInRight text-capitalize"
                      data-wow-delay=".3s"
                    >
                      <h5>Email Address:</h5>
                      <a
                        href="mailto:registeredremitsydney@gmail.com"
                        className="text-primary text-lowercase"
                      >
                        registeredremitsydney@gmail.com
                      </a>
                      <h5 className="mt-2">Contact Number:</h5>
                      <a href="tel:0431221416" className="text-primary">
                        0431221416 (Viber/WhatsApp)
                      </a>
                    </div>
                    <div
                      className="col-sm-6 fadeInRight text-capitalize mt-2 mt-sm-0"
                      data-wow-delay=".3s"
                    >
                      <h5>Our Location</h5>
                      <a href="#" className="text-primary">
                        5th Avenue Street, Sydney
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4
                    className="wow fadeInLeft text-capitalize"
                    data-wow-delay=".3s"
                  >
                    Say<span className="text-primary"> Hi!</span>
                  </h4>

                  <form
                    action=""
                    className="mt-3 wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    <div className="form-group">
                      <Label for="exampleInputEmail1">Email address</Label>
                      <input
                        className="form-control"
                        id="exampleInputEmail1"
                        required
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <Label for="exampleInputEmail1">Full Name</Label>
                      <input
                        className="form-control"
                        required
                        id="exampleInputEmail1"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <Label for="exampleInputEmail1">Your Message</Label>
                      <textarea className="form-control" required></textarea>
                    </div>
                    <button className="btn btn-primary mt-2 contact_animation_03">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="section footer-classNameic section-sm">
          <div className="container">
            <div className="row row-30">
              <div className="col-lg-3 wow fadeInLeft">
                <a className="brand logo" href="index.html">
                  <img
                    className="brand-logo-dark"
                    src="images/rrs-logo.png"
                    alt=""
                  />
                  <img
                    className="brand-logo-light"
                    src="images/rrs-logo.png"
                    alt=""
                  />
                </a>
                <p className="footer-classNameic-description offset-top-0 offset-right-25">
                  Fast-Convenient-Secure-Confidential
                  <br />
                  हामी सदैव सुरक्षित र भरपर्दो सेवा मार्फत सम्बन्ध गास्छौँ।
                </p>
                <ul className="social-links mt-3">
                  <li>
                    <a className="fa fa-linkedin text-white" href="#"></a>
                  </li>
                  <li>
                    <a className="fa fa fa-twitter text-white" href="#"></a>
                  </li>
                  <li>
                    <a className="fa fa-facebook text-white" href="#"></a>
                  </li>
                  <li>
                    <a className="fa fa-instagram text-white" href="#"></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-8 wow fadeInUp">
                <p className="footer-classNameic-title">Contact info</p>
                <div className="d-block offset-top-0">Sydney, Australia</div>
                <a
                  className="d-inline-block accent-link"
                  href="mailto:registeredremitsydney@gmail.com"
                >
                  registeredremitsydney@gmail.com
                </a>
                <a className="d-inline-block accent-link" href="tel:0431221416">
                  0431221416 (Viber/WhatsApp)
                </a>
              </div>
              <div
                className="col-lg-2 col-sm-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p className="footer-classNameic-title">Quick Links</p>
                <ul className="footer-classNameic-nav-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#feature">Our Features</a>
                  </li>
                  <li>
                    <a href="#contact">Contacts</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
                <p className="footer-classNameic-title">Newsletter</p>
                <form
                  className="rd-mailform text-left footer-classNameic-subscribe-form"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap">
                    <Label className="form-label" for="subscribe-email">
                      Your Email Address
                    </Label>

                    <input
                      className="form-input bg-white"
                      id="subscribe-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                  </div>
                  <div className="form-button group-sm text-center text-lg-left">
                    <button
                      className="button button-primary button-circle"
                      type="submit"
                    >
                      sign up
                    </button>
                  </div>
                </form>
                <p>
                  Be the first to find out about our latest news, updates, and
                  special offers.
                </p>
              </div>
            </div>
          </div>
          <div className="container wow fadeInUp" data-wow-delay=".4s">
            <div className="footer-classNameic-aside">
              <p className="rights text-white">
                <span>&copy;&nbsp;</span>
                <span className="copyright-year"></span>. All Rights Reserved by
                Registered Remit Sydney
              </p>
              <div>
                <a href="terms.html" className="mr-3 text-white">
                  Terms & Conditions
                </a>
                <a href="privacy.html" className="text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
