import { Row, Col } from 'react-bootstrap';
import Back from '../Buttons/backButton';
import SettingsButton from '../Buttons/settings';


function TitleBar(props){

    return(
        <div>
            {props.name !== 'Plant Hug' && <h1><Back/>{props.name}</h1>}
            {props.name == 'Plant Hug' && 
            <Row>
                <Col xs={1} style={{textAlign:'left'}}>
                    <SettingsButton/>
                </Col>
                <Col xs={10} style={{textAlign:'center'}}>
                    <h1>{props.name}</h1>
                </Col>
            </Row>
            }
        </div>
    );
}


export default TitleBar;