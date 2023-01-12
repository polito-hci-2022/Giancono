import {XCircleFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function StayHereButton(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <XCircleFill size={28} color='black'/>
                <br></br>No, stay here
                </h6>
            </div>
    );
}


export default StayHereButton;