import '../../App.css';
import { Navbar, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function PlantNavbar(props) {
        return (
          <>

            <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
              <Container style={{justifyContent:'center'}}>
                <Row >
                  <Col xs>
                  {props.i1}
                  </Col>
                  <Col xs>
                  {props.i2}
                  </Col>
                  <Col xs>
                  {props.i3}
                  </Col>
                </Row>
              </Container>
            </Navbar>
          </>
       
    );
}

export default PlantNavbar;