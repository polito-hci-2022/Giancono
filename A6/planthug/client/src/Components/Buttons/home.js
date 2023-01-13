import {House} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <House size={28} color='black'/>
                <br></br>Home
                </h6>
            </div>
    );
}


export default Home;