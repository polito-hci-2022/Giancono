import { Container, Row, Col } from "react-bootstrap";
import {MDBCard, MDBCardBody} from 'mdb-react-ui-kit'
import { Newspaper } from "react-bootstrap-icons";


function InfoBox(){

    return(
        <Container>
            <MDBCard className="mb-4 gradient-custom" style={{ borderRadius: "25px", backgroundColor:'#e6e6e6'}}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2">
                  <div>
                    <h2 className="display-2">
                      <strong>16°C</strong>
                    </h2>
                    <p className="mb-0">Torino, Italia</p>
                    <p className="mb-0">Sunny</p>
                  </div>
                  <div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp" width="150px"/>
                  </div>
                </div>
                </MDBCardBody>
                <MDBCardBody>
                    <div>
                        <br></br>
                        <h4 style={{textAlign:'center'}}>Trending</h4>
                        <br></br>
                        <Row>
                            <Col xs={4} style={{textAlign:'center'}}>
                            <Newspaper size={40}/>
                            </Col>
                            <Col xs={8}>
                            <p>Is that new insect from Asia a menace for our plants?</p>
                            </Col>
                        </Row>  
                        
                    </div>
              </MDBCardBody>
            </MDBCard>
            
        </Container>
    );
}

export default InfoBox;