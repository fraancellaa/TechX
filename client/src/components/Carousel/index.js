import React from "react";
import Carousel from 'react-bootstrap/Carousel'


function Promo() {
    return (
        <>
        <Carousel className="w-50" style={{display: "flex", alignItems: "center", flexWrap: "flex", marginLeft: "25%", marginBottom: "50px"}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/xbox.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Xbox Restock coming June 6th</h3>
                <p>Experience the new generation of games and entertainment with Xbox.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/yellow.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Sony Headphones coming June 27th</h3>
                <p>Best in class noise cancellation</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/pink.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Homepod Mini coming July 20th</h3>
                <p>A smart speaker with room-filling sound. An intelligent assistant that helps you control your smart home.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Promo;