import {Camera} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function RecognizeButton(props){
    const navigate = useNavigate();
    if (props.mod === 'AP') {return(        
                <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/recognize1', { replace: true })}>
                <Camera size={28} color='black'/>
                <br></br>Recognize
                </h6>
            </div>);
    }
    else return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/recognize', { replace: true })}>
                <Camera size={28} color='black'/>
                <br></br>Recognize
                </h6>
            </div>
    );
}



export default RecognizeButton;