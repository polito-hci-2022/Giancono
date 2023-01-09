import Icon from 'react-native-vector-icons/Entypo';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function ChooseAnother(props){
    return(
        <Link to="/">
            <Center>
                <Icon name='circle-with-cross' size={28}></Icon>
                {props.type == 1 ? <Text>No, take it again</Text> : <Text>No, choose another</Text>}
            </Center>
        </Link>
    );
}


export default ChooseAnother;