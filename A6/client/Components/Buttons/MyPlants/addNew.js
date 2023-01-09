import Icon from 'react-native-vector-icons/Ionicons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function AddPlant(){
    return(
        <Link to="/">
            <Center>
                <Icon name='add-circle-outline' size={28}></Icon>
                <Text>Add a Plant</Text>
            </Center>
        </Link>
    );
}


export default AddPlant;