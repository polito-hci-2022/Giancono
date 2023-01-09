import Icon from 'react-native-vector-icons/MaterialIcons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function AddPost(){
    return(
        <Link to="/">
            <Center>
                <Icon name='post-add' size={28}></Icon>
                <Text>Post it!</Text>
            </Center>
        </Link>
    );
}


export default AddPost;