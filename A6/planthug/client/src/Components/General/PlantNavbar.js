import '../../App.css';
import { Navbar, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ForumButton from '../Buttons/forumButton';
import SuggestionsButton from '../Buttons/suggestionsButton';
import RecognizeButton from '../Buttons/recognizeButton';

function PlantNavbar(props) {
        return (
          <>

            <Navbar position='absolute' fixed="bottom" style={{backgroundColor:'#F2E8CF'}}>
              <Container style={{justifyContent:'center'}}>
                <Row >
                  <Col xs>
                  <ForumButton/>
                  </Col>
                  <Col xs>
                  <SuggestionsButton/>
                  </Col>
                  <Col xs>
                  <RecognizeButton/>
                  </Col>
                </Row>
              </Container>
            </Navbar>
          </>
       
    );
}

export default PlantNavbar;