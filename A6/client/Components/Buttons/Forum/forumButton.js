import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../General/styles';

function ForumButton(){
    return(
        <Link to="/forum" style={styles.navItem}>
            <Center>
                <Icon name='forum' size={28}></Icon>
                <Text>Forum</Text>
            </Center>
        </Link>
    );
}


export default ForumButton;