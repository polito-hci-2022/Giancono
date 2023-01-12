
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'

function Back(){
    const navigate = useNavigate();
    return(
        <IoArrowBack onClick={()=>navigate(-1)} size={28}></IoArrowBack>
    );
}


export default Back;