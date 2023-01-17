import { Col, Navbar, NavbarBrand } from 'react-bootstrap';
import Back from '../Buttons/backButton';



function TitleBar(props){

    return(
        <Navbar style={{backgroundColor: "white", position: "sticky"}} fixed="top">
            {props.name !== 'Plant Hug' && props.arrow===true ? <Navbar.Brand><Back/></Navbar.Brand> : <Navbar.Brand><>&nbsp;&nbsp;&nbsp;</></Navbar.Brand>}
            {props.name !== 'Plant Hug' && props.arrow===false ? <Navbar.Brand></Navbar.Brand> : <Navbar.Brand></Navbar.Brand>}
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