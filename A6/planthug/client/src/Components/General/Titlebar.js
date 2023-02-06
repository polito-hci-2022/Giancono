import { Col, Navbar } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5'
import Back from '../Buttons/backButton';


function TitleBar(props){

    return(
        <><div className='fixed-top'>
        <Navbar style={{backgroundColor: "white", position: "sticky"}} fixed="top"><Col xs={1}/>
            <Col xs={1}>
                {(props.mod && props.name !== 'Plant Hug') && <Navbar.Brand><Back mod={props.mod}/></Navbar.Brand>}
                {(!props.mod && props.name !== 'Plant Hug' && props.arrow===true) && <Navbar.Brand><Back/></Navbar.Brand>}
                {(!props.mod && props.name === 'Plant Hug') && <Navbar.Brand>{props.icon}</Navbar.Brand>}
                {(!props.mod && props.name !== 'Plant Hug' && props.arrow===false) && <Navbar.Brand><IoArrowBack size={28} style={{color: 'white'}}></IoArrowBack></Navbar.Brand>}
            </Col>
            <Col xs={10} style={{textAlign:'center'}}>
                <h1 className='d-flex flex-row align-items-center justify-content-center'>
                &nbsp;&nbsp;{props.name}&nbsp; &nbsp; &nbsp; &nbsp; 
                    {(props.icon !== undefined) && props.name !== "Plant Hug" && <Navbar.Brand>{props.icon}</Navbar.Brand>}
                </h1>
            </Col>
            <Col xs={1}>
                <Navbar.Brand><IoArrowBack size={28} style={{color: 'white'}}></IoArrowBack></Navbar.Brand>
            </Col>
        </Navbar></div><Navbar/><Navbar/><Navbar/></>
    );
}


export default TitleBar;