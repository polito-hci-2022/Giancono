import {LightbulbFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function SuggestionsButton(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/suggestions')}>
                <LightbulbFill size={28} color='black'/>
                <br></br>Suggestions
                </h6>
            </div>
    );
}


export default SuggestionsButton;