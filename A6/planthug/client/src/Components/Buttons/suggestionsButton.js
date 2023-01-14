import {Lightbulb} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function SuggestionsButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/suggestions')}>
                <Lightbulb size={28} color='black'/>
                <br></br>Suggestions
                </h6>
            </div>
    );
}


export default SuggestionsButton;