import {Check2Circle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function GoAhead(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <Check2Circle size={28} color='black'/>
                <br></br>Go ahead
                </h6>
            </div>
    );
}



export default GoAhead;