import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AddButton(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <PlusCircle size={28} color='black'/>
                <br></br>Add
                </h6>
            </div>
    );
}


export default AddButton;