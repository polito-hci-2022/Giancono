import {ChatLeftText} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function ForumButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/forum')}>
                <ChatLeftText size={28} color='black'/>
                <br></br>Forum
                </h6>
            </div>
    );
}


export default ForumButton;