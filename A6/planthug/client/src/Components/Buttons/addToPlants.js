import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AddToPlants(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <PlusCircle size={28} color='black'/>
                <br></br>Add to my Plants
                </h6>
            </div>
    );
}



export default AddToPlants;