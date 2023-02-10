
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'

function Back(props){
    const navigate = useNavigate();
    if (!props.mod)
    return(
        <IoArrowBack onClick={()=>navigate(-1)} size={28}></IoArrowBack>
    );
    else return <IoArrowBack onClick={()=>navigate('/addplant')} size={28}></IoArrowBack>
}


export default Back;