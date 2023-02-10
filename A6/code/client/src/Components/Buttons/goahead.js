import {Check2Circle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function GoAhead(props){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>{
                    props.setLoading(1);
                    navigate('/recognize/plant')
                }}>
                <Check2Circle size={28} color='black'/>
                <br></br>Go ahead
                </h6>
            </div>
    );
}



export default GoAhead;