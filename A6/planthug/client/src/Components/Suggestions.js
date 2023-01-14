import { Container, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import PlantNavbar from './General/PlantNavbar';
import {LightbulbFill} from 'react-bootstrap-icons';
import PlantSuggestionCard from './General/PlantSuggestionCard';
import TitleBar from './General/Titlebar';

function MyButton(props){
    return(
        <Button className='px-1' style={{backgroundColor: '#6A994E', borderWidth: 0, boxShadow: 'none', outline: 'none'}}
        onClick={() => props.setPrioritize(props.btnName)} disabled={props.prioritize === props.btnName ? true : false}>
                {props.btnName}
        </Button>
    )
}

function Suggestions(props){
    const [prioritize, setPrioritize] = useState('Overall');
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
                    {prioritize === 'Overall' && 'Based on our algorithm, we think these plants may be perfect for you!'}
                    {prioritize === 'Water needs' && 'Based on our algorithm, we suggest you these plant with similiar water needs than yours!'}
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
                    <MyButton btnName='Overall' prioritize={prioritize} setPrioritize={setPrioritize} />
                    <MyButton btnName='Water needs' prioritize={prioritize} setPrioritize={setPrioritize} />
                    <MyButton btnName='Costs' prioritize={prioritize} setPrioritize={setPrioritize} />
                    <MyButton btnName='Light needs' prioritize={prioritize} setPrioritize={setPrioritize} />
                </div>
            </Row>
            <Row>
                <PlantNavbar/>
            </Row>
        </Container>
        
    );
}

export default Suggestions;