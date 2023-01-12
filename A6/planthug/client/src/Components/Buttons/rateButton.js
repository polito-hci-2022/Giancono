import {Star} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function RateButton(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <Star size={28} color='black'/>
                <br></br>Rate
                </h6>
            </div>
    );
}


export default RateButton;