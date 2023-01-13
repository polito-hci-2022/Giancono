import { Row, Col } from 'react-bootstrap';
import Back from '../Buttons/backButton';



function TitleBar(props){

    return(
        <div>
            {props.name !== 'Plant Hug' && <h1><Back/>{props.name}</h1>}
        </div>
    );
}


export default TitleBar;