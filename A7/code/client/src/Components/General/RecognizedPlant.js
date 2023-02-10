import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { CameraFill } from "react-bootstrap-icons";
import TitleBar from './Titlebar';
import PlantCard from "../Plants/PlantCard";
import PlantNavbar from './PlantNavbar';
import Home from '../Buttons/home';

const APIURL = '/api';

function RecognizedPlant(props){
    const[p, setP] = useState([]);
    
    const right = 5;
    const possible = [1, 6, 3, 7, 2];
    
    let d = new Date();
    let rand = d.getSeconds()%2;

    const getPlants = async () => {
        const url = APIURL + `/getP`;
        try{
            const res = await fetch(url);
            if(res.ok){
                const plants = await res.json();
                plants.sort((c1, c2)=>{return c1.Name > c2.Name});
                setP(plants);
                return plants;
            } else {
                const text = await res.text();
                throw new TypeError(text);
            }
          }catch(ex){
            throw ex;
          }
      }

    useEffect(() => {
        if(props.loading === 1)
            setTimeout(() => props.setLoading(0), 2000);
    }, [])

    useEffect(() => {
        getPlants();
    }, []);
    
    const rightPlant = p[right + rand];
    const possiblePlants = p.filter((p, idx) => possible.includes(idx - rand));

    return(
        <>
            {props.loading === 0 ? <>
                <Container>
                    <TitleBar name='Recognize' icon={<CameraFill />} arrow={true} />
                </Container>
                <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
                <Row className="w-75">
                    <span className='text-center'>
                        We <b>think</b> this is your plant
                    </span>
                </Row>
                <Row>
                    {rightPlant !== undefined && <PlantCard getUPID={props.getUPID} plant={rightPlant} name={rightPlant.name} path={rightPlant.photo} typeOfRating='recognition' setPID={props.setPID} />}
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
                        {possiblePlants.map(p => <PlantCard getUPID={props.getUPID} key={p.id} plant={p} name={p.name} path={p.photo} typeOfRating={null} setPID={props.setPID} />)}
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