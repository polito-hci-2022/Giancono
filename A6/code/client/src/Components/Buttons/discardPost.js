import {Check2Circle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function DiscardButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <Check2Circle size={28} color='black'/>
                <br></br>Confirm discard
                </h6>
            </div>
    );
}


export default DiscardButton;