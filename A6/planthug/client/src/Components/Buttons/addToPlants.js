import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AddToPlants(props){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>{props.addP(props.id, props.photo); if (props.add === 1) navigate('/added'); else navigate('/added1')}}>
                <PlusCircle size={28} color='black'/>
                <br></br>Add plant
                </h6>
            </div>
    );
}



export default AddToPlants;