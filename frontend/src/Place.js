import React, { useState } from "react";
import {Container, Row, Col, Form, Button, Image} from "react-bootstrap";
import BBQIcon from "./bbq.png";

const REQUIRED_KEYS = ["name", "type", "starRating", "reviews"];

const Place = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [placeInfo, setPlaceInfo] = useState({});

    const checkKeys = (keys) => {
        return keys.filter((ele) => {return REQUIRED_KEYS.includes(ele)}).length >= REQUIRED_KEYS.length;
    };

    const search = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        let newObj = {
            "name": "TEMP NAME",
            "type": "Fast Food",
            "starRating": 3,
            "reviews": [{
                name: "John Doe",
                body: "A great food place",
                starRating: 2,
                reviewNumber: 0
            }]
        };
        if (checkKeys(Object.keys(newObj))) {
            setPlaceInfo(newObj);
        }
    };
    

    return (
        <Container fluid>
            <SearchForm search={search} setSearchTerm={setSearchTerm} />
            {Object.keys(placeInfo).length > 0 ? <PlaceInfo placeInfo={placeInfo}/> : <></>}
        </Container>
    )
}

const starify = (starRating) => {
    let stars = "";
    for (let i = 0; i < starRating; i++) {
        stars += "*";
    }
    return stars
}

const PlaceInfo = ({placeInfo}) => {
    
    return (
        <Container fluid>
            <Row>
                <Image src={BBQIcon} roundedCircle style={{height: "64px", width: "64px", marginRight: "0.5rem"}}/>
                <Col>
                    <Row><p style={{marginRight: "2rem"}}>{placeInfo.name}</p><p>{starify(placeInfo.starRating)}</p></Row>
                    <Row><p>{placeInfo.type}</p></Row>
                </Col>
            </Row>
            {placeInfo.reviews.map((review) => {return <Review review={review} key={review.reviewNumber}/>})}
        </Container>
    );
}

const Review = ({review}) => (
    <Container fluid style={{outline: "1px solid black"}}>
    <Col>
        <Row><p>{review.name}</p></Row>
        <Row><p>{review.body}</p></Row>
        <Row><p>{starify(review.starRating)}</p></Row>
    </Col>
    </Container>
);

const SearchForm = ({search, setSearchTerm}) => (
        <Row>
            <Col>
                <Form onSubmit={search}>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicText">
                                <Form.Control type="text" placeholder="Search Here" onInput={e => setSearchTerm(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col><Button type="submit">Search</Button></Col>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
);

export default Place