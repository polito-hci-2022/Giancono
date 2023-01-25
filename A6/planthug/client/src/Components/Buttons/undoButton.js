import {ArrowCounterclockwise} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function UndoButton(props){
    const navigate = useNavigate();
    if (props.add===1) return(

        <div style={{textAlign:'center'}}>
            <h6 onClick={()=>navigate('/undone1')}>
            <ArrowCounterclockwise size={28} color='black'/>
            <br></br>Undo
            </h6>
        </div>
);
    else if (props.add===2) return(

        <div style={{textAlign:'center'}}>
            <h6 onClick={()=>navigate('/undone2')}>
            <ArrowCounterclockwise size={28} color='black'/>
            <br></br>Undo
            </h6>
        </div>
);
    else 
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