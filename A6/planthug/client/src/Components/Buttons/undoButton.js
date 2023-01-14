import {ArrowCounterclockwise} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function UndoButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/undone')}>
                <ArrowCounterclockwise size={28} color='black'/>
                <br></br>Undo
                </h6>
            </div>
    );
}


export default UndoButton;