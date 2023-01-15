import {XCircleFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function TakeAgain(props){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>props.setTaken(0)}>
                <XCircleFill size={28} color='black'/>
                <br></br>No, take it again
                </h6>
            </div>
    );
}



export default TakeAgain;