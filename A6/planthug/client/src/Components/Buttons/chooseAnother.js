import {XCircleFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function ChooseAnother(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <XCircleFill size={28} color='black'/>
                <br></br>No, choose another
                </h6>
            </div>
    );
}



export default ChooseAnother;