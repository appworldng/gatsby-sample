import React from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { FaBriefcase } from "react-icons/fa"

import Layout from "../layout/layout"
import Section from "../layout/section"
import Caption from "../components/caption"

import "../styles/app.scss"

import Logo from "../assets/about.png"
import Work1 from "../assets/work1.jpg"
import Work2 from "../assets/Work2.jpg"
import Work3 from "../assets/work3.jpg"
import Work4 from "../assets/work4.jpg"
import Work5 from "../assets/work5.jpg"
import Work6 from "../assets/work6.jpg"
import Work7 from "../assets/work7.jpg"
import Droid from "../assets/droid.png"

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <Row>
          <Col sm={5} className="mb-5">
            <h1 className="theme-caption">About Me</h1>
            <img src={Logo} alt="About Me" className="img-fluid" />
          </Col>
          <Col sm={7}>
            <p className="theme-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="theme-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nu pariatur excepteur sint occaecat.
            </p>
            <Row>
              <Col xs={12} sm={12} md={10} lg={8}>
                <Row>
                  <Col xs={6}>
                    <Link
                      to="/portfolio"
                      className="btn btn-block theme-button"
                    >
                      View Works
                    </Link>
                  </Col>
                  <Col xs={6}>
                    <Link
                      to="/portfolio"
                      className="btn btn-block theme-button-clean"
                    >
                      Download CV
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      <Section background="#fafafa">
        <Row className="text-center">
          <Col lg={{ span: 8, offset: 2 }}>
            <Caption>Projects</Caption>
            <p className="theme-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="mt-4">
            <Link to="/portfolio/flexpay" className="theme-portfolio-link">
              <img src={Work7} alt="Work" className="img-fluid" />
              <p>
                <FaBriefcase size="1.5em" />
                <span>Camping Enamel Mug</span>
              </p>
            </Link>
          </Col>
          <Col sm={6}>
            <Row>
              <Col xs={6} className="mt-4 theme-mt">
                <Link to="/portfolio/flexpay" className="theme-portfolio-link">
                  <img src={Work3} alt="Work" className="img-fluid" />
                  <p>
                    <FaBriefcase size="1.5em" />
                    <span>Dafur Dagagen</span>
                  </p>
                </Link>
              </Col>
              <Col xs={6} className="mt-4 theme-mt">
                <Link to="/portfolio/flexpay" className="theme-portfolio-link">
                  <img src={Work2} alt="Work" className="img-fluid" />
                  <p>
                    <FaBriefcase size="1.5em" />
                    <span>Business Cards</span>
                  </p>
                </Link>
              </Col>
              <Col xs={6} className="mt-4 theme-mt">
                <Link to="/portfolio/flexpay" className="theme-portfolio-link">
                  <img src={Work5} alt="Work" className="img-fluid" />
                  <p>
                    <FaBriefcase size="1.5em" />
                    <span>Knope Cups</span>
                  </p>
                </Link>
              </Col>
              <Col xs={6} className="mt-4 theme-mt">
                <Link to="/portfolio/flexpay" className="theme-portfolio-link">
                  <img src={Work4} alt="Work" className="img-fluid" />
                  <p>
                    <FaBriefcase size="1.5em" />
                    <span>Coffee Mugs</span>
                  </p>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={3} className="mt-4 theme-mt">
            <Link to="/portfolio/flexpay" className="theme-portfolio-link">
              <img src={Work1} alt="Work" className="img-fluid" />
              <p>
                <FaBriefcase size="1.5em" />
                <span>Orange Card</span>
              </p>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="mt-4 theme-mt">
            <Link to="/portfolio/flexpay" className="theme-portfolio-link">
              <img src={Work6} alt="Work" className="img-fluid" />
              <p>
                <FaBriefcase size="1.5em" />
                <span>Orange Land</span>
              </p>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="mt-4 theme-mt">
            <Link to="/portfolio/flexpay" className="theme-portfolio-link">
              <img src={Work3} alt="Work" className="img-fluid" />
              <p>
                <FaBriefcase size="1.5em" />
                <span>Dafur Dagagen</span>
              </p>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="mt-4 theme-mt">
            <Link to="/portfolio/flexpay" className="theme-portfolio-link">
              <img src={Work2} alt="Work" className="img-fluid" />
              <p>
                <FaBriefcase size="1.5em" />
                <span>Business Cards</span>
              </p>
            </Link>
          </Col>
        </Row>
      </Section>

      <Section>
        <Row className="text-center">
          <Col lg={{ span: 8, offset: 2 }}>
            <Caption>Work Experience</Caption>
            <p className="theme-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="mt-4">
            <div
              style={{
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.05)",
                padding: "3em",
                height: 350,
              }}
            >
              <p className="theme-work-date">Mar 2020 - Present</p>
              <h1 className="theme-work-caption">Full Stack Engineer</h1>
              <p className="theme-work-place">Turing Inc.</p>
              <p className="theme-text mt-5">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mt-4">
            <div
              style={{
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.05)",
                padding: "3em",
                height: 350,
              }}
            >
              <p className="theme-work-date">Aug 2017 - Feb 2020</p>
              <h1 className="theme-work-caption">Full Stack Engineer</h1>
              <p className="theme-work-place">LadipoMarket</p>
              <p className="theme-text mt-5">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mt-4">
            <div
              style={{
                boxShadow: "0 0 50px rgba(0, 0, 0, 0.05)",
                padding: "3em",
                height: 350,
              }}
            >
              <p className="theme-work-date">Jan 2012 - Aug 2017</p>
              <h1 className="theme-work-caption">Full Stack Engineer</h1>
              <p className="theme-work-place">AppWorld</p>
              <p className="theme-text mt-5">
                Lorem ipsum dolor sit amet, coectetur adipisicing elit, sed do
                eiusmod temp incididunt ut labore.
              </p>
            </div>
          </Col>
        </Row>
      </Section>

      <Section background="#feb633" image={Droid} padding="10em">
        <Row className="text-center">
          <Col lg={{ span: 8, offset: 2 }}>
            <Caption classes="caption-white">Got A Project For Me?</Caption>
          </Col>
        </Row>
      </Section>

      <Section>
        <Row>
          <Col sm={3}></Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Label className="theme-text-label">Name</Form.Label>
                <Form.Control
                  className="theme-text-control"
                  type="text"
                  placeholder="Chigozie Orunta"
                />
              </Form.Group>
              <Form.Group className="mt-5">
                <Form.Label className="theme-text-label">
                  Phone Number
                </Form.Label>
                <Form.Control
                  className="theme-text-control"
                  type="text"
                  placeholder="+1234567890"
                />
              </Form.Group>
              <Form.Group className="mt-5">
                <Form.Label className="theme-text-label">E-mail</Form.Label>
                <Form.Control
                  className="theme-text-control"
                  type="email"
                  placeholder="chigozie.orunta@chigozieorunta.com"
                />
              </Form.Group>
              <Form.Group className="mt-5">
                <Form.Label className="theme-text-label">Message</Form.Label>
                <textarea
                  className="form-control theme-text-control"
                  rows="5"
                  placeholder="Type in your message"
                ></textarea>
              </Form.Group>
              <Button className="btn theme-button mt-5">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Section>

      <Section background="#f6f8fc">
        <Row className="text-center">
          <Col lg={{ span: 8, offset: 2 }}>
            <Caption>G.</Caption>
            <p className="theme-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus
            </p>
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

export default IndexPage
