import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import PlantNavbar from './General/PlantNavbar';
import {LightbulbFill} from 'react-bootstrap-icons';
import PlantSuggestionCard from './General/PlantSuggestionCard';
import TitleBar from './General/Titlebar';

function Suggestions(props){
    const [prioritize, setPrioritize] = useState('Water needs');
    const plants = [
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
    ]

    return(
        <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
            <Row className='w-100 d-flex justify-content-between'>
                <TitleBar name='Suggestions' icon={<LightbulbFill />} />
            </Row>
            <Row>
                <span className='text-center'>
                    {prioritize === 'Water needs' && 'Based on our algorithm, we think these plants may be perfect for you!'}
                    {prioritize === 'Costs' && 'Based on our algorithm, you may like these plants that are a bargain in most shops!'}
                    {prioritize === 'Light needs' && 'Based on our algorithm, these plants generally need a similiar amount of light than yours!'}
                </span>
            </Row>
            <Row className='w-100 overflow-auto'>
                <Container className='d-flex flex-row flex-nowrap'>
                    {plants.map(p => <PlantSuggestionCard key={p.id} name={p.name} path={p.path} />)}
                </Container>
            </Row>
            <Row>
                <span className='text-center'>
                    <span className='fw-bold'>Based on:</span><span>&nbsp;{prioritize}</span>
                </span>
                <br/>
                <span className='text-center'>Prioritize</span>
                <div className='d-flex flex-row justify-content-evenly'>
                    <Button style={{backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}}
                    onClick={() => setPrioritize('Water needs')} disabled={prioritize === 'Water needs' ? true : false}>
                        Water needs
                    </Button>
                    <Button style={{backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}}
                    onClick={() => setPrioritize('Costs')} disabled={prioritize === 'Costs' ? true : false}>
                        Costs
                    </Button>
                    <Button style={{backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}}
                    onClick={() => setPrioritize('Light needs')} disabled={prioritize === 'Light needs' ? true : false}>
                        Light needs
                    </Button>
                </div>
            </Row>
            <Row>
                <PlantNavbar/>
            </Row>
        </Container>
        
    );
}

export default Suggestions;