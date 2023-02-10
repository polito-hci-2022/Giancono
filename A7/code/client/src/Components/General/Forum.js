import PlantNavbar from './ForumNavbar';
import React from 'react';
import { GearFill, StarFill, QuestionCircleFill, CartPlusFill, ChatLeftDots} from 'react-bootstrap-icons';
import { Container, Row, Button } from 'react-bootstrap'
import TitleBar from './Titlebar';
import { useNavigate } from 'react-router-dom';


function Forum() {
    const navigate = useNavigate();

    return (
        <Container>
            <TitleBar name='Forum' arrow={true} icon={<ChatLeftDots />}></TitleBar>
            <br></br>
            <br></br>
            <br></br>


                <Container>
                    
                    <br></br>
                    <h2>Topics:</h2>
                    <br></br>
                    <Row>
                        <Container style={{ backgroundColor: '#386641', color: 'white', height:'80px', textAlign:'center', paddingTop:'22px'}} className="rounded-pill border-0" onClick={()=>{navigate("/helpmyplant")}}>
                            <h4>
                                <GearFill/>⠀Help my plant
                            </h4>
                            
                        </Container>
                    </Row>
                    <br></br>
                    <Row>
                        <Container style={{ backgroundColor: '#386641', color: 'white', height:'80px', textAlign:'center', paddingTop:'22px'}} className="rounded-pill border-0" onClick={()=>{navigate("/helpmyplant")}}>
                            <h4>
                            <StarFill></StarFill>
                        ⠀Plant's reviews
                            </h4>
                            
                        </Container>
                    </Row>
                    <br></br>
                    <Row>
                        <Container style={{ backgroundColor: '#386641', color: 'white', height:'80px', textAlign:'center', paddingTop:'22px'}} className="rounded-pill border-0" onClick={()=>{navigate("/helpmyplant")}}>
                            <h4>
                            <CartPlusFill></CartPlusFill>
                        ⠀Accessories for your plant
                            </h4>
                            
                        </Container>
                    </Row>
                    <br></br>
                    <Row>
                        <Container style={{ backgroundColor: '#386641', color: 'white', height:'80px', textAlign:'center', paddingTop:'22px'}} className="rounded-pill border-0" onClick={()=>{navigate("/helpmyplant")}}>
                            <h4>
                            <QuestionCircleFill></QuestionCircleFill>
                        ⠀Others
                            </h4>
                            
                        </Container>
                    </Row>
                    <br></br>
                    




                </Container>


            <PlantNavbar />
        </Container>

    );
}




export default Forum;