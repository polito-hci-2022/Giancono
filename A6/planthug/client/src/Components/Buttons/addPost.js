import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AddPost(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <PlusCircle size={28} color='black'/>
                <br></br>Post it!
                </h6>
            </div>
    );
}


export default AddPost;