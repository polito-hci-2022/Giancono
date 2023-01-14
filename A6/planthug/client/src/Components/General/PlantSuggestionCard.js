import { Button, Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import PlantNavbar from "./PlantNavbar";
import Home from "../Buttons/home";

function PlantSuggestionCard(props){
    return(<>
        <Card className="flex-shrink-0 mx-2" style={{width: '18rem', height: '18rem', borderBlockColor: '#386641', backgroundColor: '#386641', color: 'white'}}>
            <Card.Img style={{width: '100%', height: '66%', overflow: 'hidden', objectFit: 'cover'}} variant="top" src={props.path} />
            <Card.Title className="text-center mt-1">{props.name}</Card.Title>
            <Card.Body className="d-flex flex-row justify-content-between">
                <Card.Link disabled><StarFill style={{color: "#386641"}} /></Card.Link>
                <Card.Link href="#"><Button style={{color: 'black', backgroundColor: '#A7C957', borderWidth: 0, boxShadow: 'none', outline: 'none'}}>See more</Button></Card.Link>
                <Card.Link className="mx-0"><StarFill style={{color: "yellow"}} /></Card.Link>
            </Card.Body>
        </Card></>
    )
}

export default PlantSuggestionCard;