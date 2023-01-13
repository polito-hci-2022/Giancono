import {FileEarmarkBreak} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function GoToPreview(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <FileEarmarkBreak size={28} color='black'/>
                <br></br>Go to Preview
                </h6>
            </div>
    );
}


export default GoToPreview;