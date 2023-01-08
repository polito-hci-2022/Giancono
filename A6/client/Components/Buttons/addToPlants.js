import Icon from 'react-native-vector-icons/Ionicons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function AddToPlants(){
    return(
        <Link to="/">
            <Center>
                <Icon name='add-circle-outline' size={30}></Icon>
                <Text>Add to my Plant</Text>
            </Center>
        </Link>
    );
}


export default AddToPlants;