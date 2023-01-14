import { Button, Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import PlantNavbar from "./PlantNavbar";
import Home from "../Buttons/home";

function PlantSuggestionCard(props){
    return(<>
        <Card className="flex-shrink-0 mx-2" style={{width: '18rem', height: '18rem', borderBlockColor: '#386641', backgroundColor: '#386641', color: 'white'}}>
            <Card.Img style={{width: '100%', height: '66%', overflow: 'hidden', objectFit: 'cover'}} variant="top" src={props.path} />
            <Card.Title className="text-center mt-1">{props.plantName}</Card.Title>
            <Card.Body className="d-flex flex-row justify-content-between">
                <Card.Text><StarFill style={{color: "#386641"}} /></Card.Text>
                <Card.Link href="#"><Button style={{color: 'white', backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}}>See more</Button></Card.Link>
                <Card.Link href="#"><StarFill style={{color: "yellow"}} /></Card.Link>
            </Card.Body>
        </Card>
        <PlantNavbar i2={<Home/>}/></>
    )
}

export default PlantSuggestionCard;