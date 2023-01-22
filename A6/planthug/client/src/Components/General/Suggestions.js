import { Container, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import React from 'react';
import PlantNavbar from './PlantNavbar';
import {Lightbulb} from 'react-bootstrap-icons';
import PlantCard from '../Plants/PlantCard';
import TitleBar from './Titlebar';
import Home from '../Buttons/home';

const APIURL = 'http://localhost:3001/api';

function MyButton(props){
    return(
        <Button className='px-1' style={{backgroundColor: '#A7C957', color:'black', borderWidth: 0, boxShadow: 'none', outline: 'none'}}
        onClick={() => props.setPrioritize(props.btnName)} disabled={props.prioritize === props.btnName ? true : false}>
                {props.btnName}
        </Button>
    )
}

function Suggestions(props){
    const [prioritize, setPrioritize] = useState('Overall');
    const [p, setP] = useState([])
    const overall = [0, 2, 4];
    const water = [1, 2, 5, 7, 8];
    const cost = [0, 3, 8, 4];
    const light = [6, 8, 2, 5];
    let d = new Date();
    let rand = d.getSeconds()%2;
    let plants;

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
        getPlants();
    }, []);

    useEffect(() => {
        d = new Date();
        rand = d.getSeconds()%2;
    }, [prioritize]);

    switch(prioritize){
        case 'Overall':
            plants = p.filter((p, idx) => overall.includes(idx - rand));
            break;
        case 'Water needs':
            plants = p.filter((p, idx) => water.includes(idx - rand));
            break;
        case 'Costs':
            plants = p.filter((p, idx) => cost.includes(idx - rand));
            break;
        case 'Light needs':
            plants = p.filter((p, idx) => light.includes(idx - rand));
            break;
    }

    return(<>
        <Container>
            <TitleBar arrow={true} name='Suggestions' icon={<Lightbulb />} />
        </Container>
        <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
            <Row>
                <span className='text-center'>
                    {prioritize === 'Overall' && 'Based on our algorithm, we think these plants may be perfect for you!'}
                    {prioritize === 'Water needs' && 'Based on our algorithm, we suggest you these plant with similiar water needs than yours!'}
                    {prioritize === 'Costs' && 'Based on our algorithm, you may like these plants that are a bargain in most shops!'}
                    {prioritize === 'Light needs' && 'Based on our algorithm, these plants generally need a similiar amount of light than yours!'}
                </span>
            </Row>
            <Row className='w-100 overflow-auto'>
                <Container className='d-flex flex-row flex-nowrap'>
                    {plants.map(p => <PlantCard getUPID={props.getUPID} key={p.id} plant={p} name={p.name} path={p.photo} typeOfRating='suggestion' setPID={props.setPID} />)}
                </Container>
            </Row>
            <Row>
                <br/>
                <Container className='text-center py-2'>Tap to <b>prioritize</b> a specific aspect:
                </Container><div className='d-flex flex-row justify-content-evenly'>
                    <MyButton btnName='Overall' prioritize={prioritize} setPrioritize={setPrioritize} />
                    <MyButton btnName='Water needs' prioritize={prioritize} setPrioritize={setPrioritize} />
                    <MyButton btnName='Costs' prioritize={prioritize} setPrioritize={setPrioritize} />
                    <MyButton btnName='Light needs' prioritize={prioritize} setPrioritize={setPrioritize} />
                </div>
            </Row><br/>
            <Row>
                <PlantNavbar i2={<Home/>}/>
            </Row>
        </Container></>
        
    );
}

export default Suggestions;