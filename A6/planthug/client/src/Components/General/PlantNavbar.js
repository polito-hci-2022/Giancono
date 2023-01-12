
import {Navbar, Container, Row, Col} from "react-bootstrap";
import ForumButton from "../Buttons/forumButton";
import SuggestionsButton from "../Buttons/suggestionsButton";
import RecognizeButton from "../Buttons/recognizeButton";

function PlantNavbar(){

    return(

            <Container>
                <Navbar>
                   <Row>
                        <Col>
                        <ForumButton/>
                        </Col>
                        <Col>
                        <SuggestionsButton/>
                        </Col>
                        <Col>
                        <RecognizeButton/>
                        </Col>
                    </Row>
                </Navbar>
            </Container>

        
    );
}




export default PlantNavbar;


