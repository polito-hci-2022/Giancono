import { Row, Col, Navbar } from 'react-bootstrap';
import Back from '../Buttons/backButton';



function TitleBar(props){

    return(<><Navbar>
        <Navbar.Brand><Back/></Navbar.Brand>
        <Col xs={10} style={{textAlign:'center'}}><h1>{props.name}</h1></Col></Navbar>
    </>);
}


export default TitleBar;