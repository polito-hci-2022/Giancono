import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AddToPlants(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/added')}>
                <PlusCircle size={28} color='black'/>
                <br></br>Add plant
                </h6>
            </div>
    );
}



export default AddToPlants;