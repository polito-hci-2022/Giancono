import {Flower3} from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom';

function MyPlantsButton(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/myplants')}>
                <Flower3 size={28} color='black'/>
                <br></br>My Plants
                </h6>
            </div>
    );
}


export default MyPlantsButton;