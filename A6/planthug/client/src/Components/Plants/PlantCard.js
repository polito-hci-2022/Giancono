import { Button, Card, Modal } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import PlantNavbar from "../General/PlantNavbar";
import Home from "../Buttons/home";
import React, { useState } from 'react';

function PlantCard(props){
    const [show, setShow] = useState(false);
    const [rated, setRated] = useState(false);
    const [rate, setRate] = useState(0);
    const handleClose = () => {
        setRate(0);
        setShow(false);
    };
    const handleConfirm = () => {
        setRated(true);
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return(<>
        <Card className="flex-shrink-0 mx-2 px-0" style={{width: '18rem', height: '18rem', borderBlockColor: '#386641', backgroundColor: '#386641', color: 'white'}}>
            <Card.Img style={{width: '100%', height: '66%', overflow: 'hidden', objectFit: 'cover'}} variant="top" src={props.path} />
            <Card.Title className="text-center mt-1">{props.name}</Card.Title>
            <Card.Body className={"d-flex flex-row " + (props.typeOfRating !== null ? 'justify-content-between' : 'justify-content-center')}>
                {props.typeOfRating !== null && <Card.Link disabled><StarFill style={{color: "#386641"}} /></Card.Link>}
                <Card.Link href="#"><Button style={{color: 'black', backgroundColor: '#A7C957', borderWidth: 0, boxShadow: 'none', outline: 'none'}}>See more</Button></Card.Link>
                {props.typeOfRating !== null && <Card.Link className="mx-0" onClick={handleShow}><StarFill style={{color: "yellow"}} /></Card.Link>}
            </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: '#A7C957'}}>
                <Modal.Title>Rate our {props.typeOfRating}</Modal.Title>
            </Modal.Header>
            {rated ? <Modal.Body className="d-flex flex-row justify-content-center" style={{backgroundColor: '#A7C957'}}>
                You have already rated this {props.typeOfRating}!
            </Modal.Body>:
            <Modal.Body className="d-flex flex-row justify-content-center" style={{backgroundColor: '#A7C957'}}>
                <a onClick={() => setRate(1)}>{rate >= 1 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(2)}>{rate >= 2 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(3)}>{rate >= 3 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(4)}>{rate >= 4 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
                <a onClick={() => setRate(5)}>{rate >= 5 ? <StarFill color="yellow" className="mx-1" /> : <Star color="yellow" className="mx-1" />}</a>
            </Modal.Body>}
            {! rated && <Modal.Footer style={{backgroundColor: '#A7C957'}}>
                <Button style={{backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}} onClick={handleClose}>
                    Cancel
                </Button>
                <Button style={{backgroundColor: '#386641', borderWidth: 0, boxShadow: 'none', outline: 'none'}} onClick={handleConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>}
        </Modal>
        <PlantNavbar i2={<Home/>}/></>
    )
}

export default PlantCard;