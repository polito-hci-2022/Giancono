import Icon from 'react-native-vector-icons/Entypo';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function StayHereButton(props){
    return(
        <Link to="/">
            <Center>
                <Icon name='circle-with-cross' size={28}></Icon>
                <Text>Stay here</Text>
            </Center>
        </Link>
    );
}


export default StayHereButton;