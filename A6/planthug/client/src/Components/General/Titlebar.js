import { Col, Navbar, NavbarBrand } from 'react-bootstrap';
import Back from '../Buttons/backButton';



function TitleBar(props){

    return(
        <Navbar>
            {props.name !== 'Plant Hug' ? <Navbar.Brand><Back/></Navbar.Brand> : <Navbar.Brand><>&nbsp;&nbsp;&nbsp;</></Navbar.Brand>}
            <Col xs={10} style={{textAlign:'center'}}>
                <h1 className='d-flex flex-row align-items-center justify-content-center'>
                    {props.name}&nbsp;
                    {(props.icon !== undefined) && <Navbar.Brand>{props.icon}</Navbar.Brand>}
                </h1>
            </Col>
        </Navbar>
    );
}


export default TitleBar;