import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function AddPlant(props){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/addplant')}>
                <PlusCircle size={28} color='black'/>
                <br></br>{props.add && <>Add Plant</>}
                {props.new && <>New Plant</>}
                </h6>
            </div>
    );
}


export default AddPlant;