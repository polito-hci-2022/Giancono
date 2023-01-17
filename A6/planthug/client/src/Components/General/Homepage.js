import { Container, Navbar} from 'react-bootstrap';
import React from 'react';
import HMP from './HMP';
import InfoBox from './info';
import PlantNavbar from './PlantNavbar';
import ForumButton from '../Buttons/forumButton';
import SuggestionsButton from '../Buttons/suggestionsButton';
import RecognizeButton from '../Buttons/recognizeButton';

import SettingsPopup from './Settings';
import TitleBar from './Titlebar';

function Homepage(){

    return(
        <Container>
            <br></br>
            <Navbar>
            <SettingsPopup/>
            <TitleBar name='Plant Hug'/></Navbar>
        

            <div style={{textAlign:'center'}}>
            </div>
            <br></br>
            <HMP/>
            <br></br>
            <br></br>
            <InfoBox/>
            <PlantNavbar i1={<ForumButton/>} i2={<SuggestionsButton/>} i3={<RecognizeButton/>}/>
        </Container>
        
    );
}




export default Homepage;


