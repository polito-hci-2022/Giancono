import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { CameraFill } from "react-bootstrap-icons";
import TitleBar from './Titlebar';
import PlantCard from "./PlantCard";
import PlantNavbar from './PlantNavbar';
import Home from '../Buttons/home';

function RecognizedPlant(){
    const [recognized, setRecognized] = useState(false);

    const rightPlant = {
        name: 'Pachira aquatica',
        id: 6,
        path: 'https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg'
    };

    const possiblePlants = [
        {
            name: 'Pachira aquatica',
            id: 1,
            path: 'https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg'
        },
        {
            name: 'Pachira aquatica',
            id: 2,
            path: 'https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg'
        },
        {
            name: 'Pachira aquatica',
            id: 3,
            path: 'https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg'
        },
        {
            name: 'Pachira aquatica',
            id: 4,
            path: 'https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg'
        },
        {
            name: 'Pachira aquatica',
            id: 5,
            path: 'https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg'
        }
    ];

    useEffect(() => {
        setTimeout(() => setRecognized(true), 2000);
    }, [])

    return(
        <>
            {recognized ? <>
                <Container>
                    <TitleBar name='Recognize' icon={<CameraFill />} />
                </Container>
                <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
                <Row className="w-75">
                    <span className='text-center'>
                        We <b>think</b> this is your plant
                    </span>
                </Row>
                <Row>
                    <PlantCard name={rightPlant.name} path={rightPlant.path} typeOfRating='recognition' />
                </Row>
                <Row className="w-75">
                    <span className='text-center'>
                        <b>Based on:</b> leaves, presence of flowers, colors.
                    </span>
                </Row>
                <Row className="w-75">
                    <span className='text-center'>
                        If this is not your plant, <b>maybe</b> it could be one of these.
                    </span>
                </Row>
                <Row className='w-100 overflow-auto'>
                    <Container className='d-flex flex-row flex-nowrap'>
                        {possiblePlants.map(p => <PlantCard key={p.id} name={p.name} path={p.path} typeOfRating={null} />)}
                    </Container>
                </Row>
                <Row>
                    <p>&nbsp;<br/>&nbsp;</p>
                </Row>
                <Row>
                    <PlantNavbar i2={<Home/>}/>
                </Row>
                </Container>
            </> :
            <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around' style={{backgroundColor: '#F2E8CF'}}>
                <Row>
                    <Col xs={10} style={{textAlign:'center'}}>
                        <h1 className='d-flex flex-row align-items-center justify-content-center' style={{color: '#386641'}}>
                            LOADING
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Spinner animation='border' style={{color: '#386641'}}/>
                </Row>
                <Row className="w-75">
                    <span className="text-center" style={{color: '#386641'}}>Trying to recognize your plant!</span>
                </Row>
                <Row></Row>
                <Row></Row>
            </Container>}
        </>
    );
}

export default RecognizedPlant;