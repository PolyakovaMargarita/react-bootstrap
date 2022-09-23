import { Carousel } from "react-bootstrap";
import forest from "../asserts/forest.jpg"
import dforest from "../asserts/forest2.jpg"
import bforest from "../asserts/forest3.jpg"

const CarouselBox = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={forest}
                    alt="Forest"
                />
                <Carousel.Caption>
                    <h3>Mystical Forest</h3>
                    <p>
                    Лес — экологическая система, биогеоценоз, в которой главной жизненной формой являются деревья. Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе — это часть биосферы, в локальном — это может быть насаждение.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={dforest}
                    alt="Forest"
                />
                <Carousel.Caption>
                    <h3>Light Forest</h3>
                    <p>
                    Лес — экологическая система, биогеоценоз, в которой главной жизненной формой являются деревья. Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе — это часть биосферы, в локальном — это может быть насаждение.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bforest}
                    alt="Forest"
                />
                <Carousel.Caption>
                    <h3>Mountains</h3>
                    <p>
                    Лес — экологическая система, биогеоценоз, в которой главной жизненной формой являются деревья. Лес — составная часть природы, понятие «лес» можно рассматривать на разных уровнях. В глобальном масштабе — это часть биосферы, в локальном — это может быть насаждение.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBox;