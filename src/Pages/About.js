import React from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";

const About = () => {
    console.log("are you here?")
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example"defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img width="868px" height="548px" src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png"/>
                                    <p>
                                        Figma. An all-in-one design platform. DesignPrototypingDesign systemsDownloads. FigJam. An online whiteboard for teams.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://www.codemotion.com/magazine/wp-content/uploads/2020/08/adults-analysis-brainstorming-1661004-896x504.jpg"/>
                                    <p>
                                    A.Team is a members-only network that empowers the world’s top engineering, product, design, and marketing builders to team up and build things that matter for the world’s most exciting companies.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <img src="https://scitechgen.files.wordpress.com/2022/04/languages2-1.png"/>
                                    <p>
                                        A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://www.xicom.biz/blog/wp-content/uploads/2019/05/js-framework.jpg"/>
                                    <p>
                                    At their most basic, JS frameworks are collections of JavaScript code libraries (see below) that provide developers with pre-written JS code to use for routine programming features and tasks—literally a framework to build websites or web applications around.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://hackr.io/blog/top-javascript-libraries/thumbnail/large"/>
                                    <p>
                                    A JavaScript library is a library of pre-written JavaScript code that allows for easier development of JavaScript-based applications, especially for AJAX and other web-centric technologies.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
export default About;