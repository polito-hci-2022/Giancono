import {ReplyFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function ReplyButton(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/recognize')}>
                <ReplyFill size={28} color='black'/>
                <br></br>Reply
                </h6>
            </div>
    );
}



export default ReplyButton;