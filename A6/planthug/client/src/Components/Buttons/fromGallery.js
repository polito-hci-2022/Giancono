import {Image} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function FromGallery(){
    const navigate = useNavigate();
    return(

            <div style={{justifyContent:'center'}}>
                <h6 onClick={()=>navigate('/a')}>
                <Image size={28} color='black'/>
                <br></br>From Gallery
                </h6>
            </div>
    );
}

export default FromGallery;