import Icon from 'react-native-vector-icons/Feather';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function GoAhead(){
    return(
        <Link to="/">
            <Center>
                <Icon name='check-circle' size={28}></Icon>
                <Text>Go ahead</Text>
            </Center>
        </Link>
    );
}


export default GoAhead;