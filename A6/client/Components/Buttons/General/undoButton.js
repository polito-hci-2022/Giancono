import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function UndoButton(){
    return(
        <Link to="/">
            <Center>
                <Icon name='undo' size={28}></Icon>
                <Text>Undo</Text>
            </Center>
        </Link>
    );
}


export default UndoButton;