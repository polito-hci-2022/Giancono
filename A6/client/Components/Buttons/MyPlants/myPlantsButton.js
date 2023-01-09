import Icon from 'react-native-vector-icons/Ionicons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function MyPlantsButton(){
    return(
        <Link to="/">
            <Center>
                <Icon name='leaf' size={28}></Icon>
                <Text>My Plants</Text>
            </Center>
        </Link>
    );
}


export default MyPlantsButton;