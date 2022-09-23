import React from "react";
import { Col, Container, Row, Media, Card, ListGroup } from "react-bootstrap";

const Blog = () => {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <div className="d-flex align-items-center m-5">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                                    width={150}
                                    heigth={150}
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
                            </div>
                        </div>
                        <div className="d-flex align-items-center m-5">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                                    width={150}
                                    heigth={150}
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
                            </div>
                        </div>
                        <div className="d-flex align-items-center m-5">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                                    width={150}
                                    heigth={150}
                                    className="mr-3"
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Test</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                JavaScript je multiplatformní, objektově orientovaný, událostmi řízený skriptovací jazyk, jehož autorem je Brendan Eich z někdejší společnosti Netscape.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
}

export default Blog;