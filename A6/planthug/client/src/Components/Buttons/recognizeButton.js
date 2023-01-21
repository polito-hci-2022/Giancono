import {Camera} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function RecognizeButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/recognize', { replace: true })}>
                <Camera size={28} color='black'/>
                <br></br>Recognize
                </h6>
            </div>
    );
}



export default RecognizeButton;