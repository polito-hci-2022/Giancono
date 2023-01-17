import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function NewPostButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/newpost')}>
                <PlusCircle size={28} color='black'/>
                <br></br>New⠀post
                </h6>
            </div>
    );
}


export default NewPostButton;