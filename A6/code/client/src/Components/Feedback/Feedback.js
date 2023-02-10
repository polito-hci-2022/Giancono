
import { Container, Form } from "react-bootstrap";
import TitleBar from '../General/Titlebar';
import {Rating} from 'react-simple-star-rating'
import { useState } from "react";
import PlantNavbar from "../General/PlantNavbar";
import Home from "../Buttons/home";
import SendFeedback from "../Buttons/sendFeedback";

function Feedback(){
   const [rating, setRating] = useState(0);

   const handleRating = (rate) => {
    setRating(rate)
   }

    return(
        <Container>
            <TitleBar name='Feedback'/>
            <br></br>
            <br></br>
            <Container style={{justifyContent:'center', textAlign:'center'}}>
                <p>Rate our suggestions:</p>
                <Rating onClick={handleRating}/>
                <br></br>
                <br></br>
                <p>Your feedback is important to us!</p>
                <br></br>
            </Container>
            <br></br>
            <br></br>
            <Form style={{width:'320px', paddingLeft:'5%'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Why? (optional)</Form.Label>
                    <Form.Control size="lg" placeholder="write your comments here" as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <PlantNavbar i1={<Home/>} i3={<SendFeedback/>}/>
        </Container>
    );
}

export default Feedback;