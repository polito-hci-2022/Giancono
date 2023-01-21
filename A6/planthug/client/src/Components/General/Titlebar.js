import { Col, Navbar } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5'
import Back from '../Buttons/backButton';


function TitleBar(props){

    return(
        <Navbar style={{backgroundColor: "white", position: "sticky"}} fixed="top">
            <Col xs={1}>
                {(props.name !== 'Plant Hug' && props.arrow===true) && <Navbar.Brand><Back/></Navbar.Brand>}
                {(props.name !== 'Plant Hug' && props.arrow===false) && <Navbar.Brand><IoArrowBack size={28} style={{color: 'white'}}></IoArrowBack></Navbar.Brand>}
            </Col>
            <Col xs={10} style={{textAlign:'center'}}>
                <h1 className='d-flex flex-row align-items-center justify-content-center'>
                    {props.name}&nbsp; 
                    {(props.icon !== undefined) && <Navbar.Brand>{props.icon}</Navbar.Brand>}
                </h1>
            </Col>
            <Col xs={1}>
                <Navbar.Brand><IoArrowBack size={28} style={{color: 'white'}}></IoArrowBack></Navbar.Brand>
            </Col>
        </Navbar>
    );
}


export default TitleBar;