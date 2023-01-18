import {ReplyFill} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function ReplyButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}} >
                <h6 >
                <ReplyFill size={28} color='black'/>
                <br></br>Reply
                </h6>
            </div>
    );
}



export default ReplyButton;