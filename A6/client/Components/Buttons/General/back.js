import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigate} from 'react-router-native';
import {Center} from 'native-base';
import {Text, Button} from 'react-native';

function Back(){
    const navigate = useNavigate();
    return(
        <Center>
            <Icon onPress={()=>navigate(-1)} name='md-arrow-back-outline' size={28}></Icon>
        </Center>
       
    );
}


export default Back;