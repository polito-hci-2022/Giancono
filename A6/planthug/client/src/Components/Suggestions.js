import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import PlantNavbar from './General/PlantNavbar';
import Back from './Buttons/backButton';
import {LightbulbFill} from 'react-bootstrap-icons';
import PlantSuggestionCard from './General/PlantSuggestionCard';

function Suggestions(){
    const [prioritize, setPrioritize] = useState('Water needs');

    return(
        <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
            <Row className='w-100 d-flex justify-content-between'>
                <Col xs={1} style={{textAlign:'left'}}>
                    <Back />
                </Col>
                <Col xs={10} style={{textAlign:'center'}}>
                    <h1>Suggestions&nbsp;<LightbulbFill /></h1>
                </Col>
                <Col />
            </Row>
            <Row>
                <span className='text-center'>
                    Based on our algorithm, we think these plants may be perfect for you!
                </span>
            </Row>
            <Row className='w-100 overflow-auto'>
                <Container className='d-flex flex-row flex-nowrap'>
                <PlantSuggestionCard path="https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg" plantName='Pachira aquatica' id={1} />
                <PlantSuggestionCard path="https://fioristaspagnoli.it/wp-content/uploads/2021/05/Pachira-aquatica-1.jpg" plantName='Pachira aquatica' id={1} />
                </Container>
            </Row>
            <Row>
                <span className='text-center'>
                    Based on: {prioritize}
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