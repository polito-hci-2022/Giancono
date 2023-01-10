import Icon from 'react-native-vector-icons/Entypo';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../General/styles';

function NewPostButton(){
    return(
        <Link to="/" style={styles.navItem}>
            <Center>
              <Icon name='new-message' size={28}></Icon>
              <Text>New Post</Text>
            </Center>
        </Link>
    );
}


export default NewPostButton;