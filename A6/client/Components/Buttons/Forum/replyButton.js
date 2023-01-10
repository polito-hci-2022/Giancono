import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../General/styles';

function ReplyButton(props){
    return(
        <Link to="/"  style={styles.navItem}>
            <Center>
                {props.type==1 ?  <Icon name='new-message' size={28}></Icon> : <Icon2 name='check-circle' size={28}></Icon2>}
                <Text>Reply</Text>
            </Center>
        </Link>
    );
}


export default ReplyButton;