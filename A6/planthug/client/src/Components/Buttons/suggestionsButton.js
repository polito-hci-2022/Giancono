import {Lightbulb} from 'react-bootstrap-icons';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useNavigate } from 'react-router-dom';

function SuggestionsButton(props){
    const navigate = useNavigate();
    if (props.mod === 'AP') {
        return (
        <div style={{textAlign:'center'}}>
        <h6 onClick={()=>navigate('/suggestions1', { replace: true })}>
        <Lightbulb size={28} color='black'/>
        <br></br>Suggestions
        </h6>
    </div>);
    }
    else return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/suggestions', { replace: true })}>
                <Lightbulb size={28} color='black'/>
                <br></br>Suggestions
                </h6>
            </div>
    );
}


export default SuggestionsButton;