import '../../App.css';
import { Navbar, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NewPostButton from '../Buttons/newPost';
import HomeButton from '../Buttons/home';

function PlantNavbar(props) {
        return (
          <>

            <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
              <Container style={{justifyContent:'center'}}>
                <Row >
                  <Col xs>
                  <HomeButton/>
                  </Col>
                  <Col xs>
                  <NewPostButton/>
                  </Col>
                </Row>
              </Container>
            </Navbar>
          </>
       
    );
}

export default PlantNavbar;