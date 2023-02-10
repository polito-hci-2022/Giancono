import {SendPlus} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function SendFeedback(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/recognize')}>
                <SendPlus size={28} color='black'/>
                <br></br>Send Feedback
                </h6>
            </div>
    );
}



export default SendFeedback;