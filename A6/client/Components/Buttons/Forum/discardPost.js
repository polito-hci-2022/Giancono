import Icon from 'react-native-vector-icons/Feather';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function DiscardButton(){
    return(
        <Link to="/">
            <Center>
                <Icon name='check-circle' size={28}></Icon>
                <Text>Confirm discard</Text>
            </Center>
        </Link>
    );
}


export default DiscardButton;