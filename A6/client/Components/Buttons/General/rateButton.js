import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../styles';

function RateButton(){
    return(
        <Link to="/" style={styles.navItem}>
            <Center>
              <Icon name='star' size={28}></Icon>
              <Text>Rate Suggestions</Text>
            </Center>
        </Link>
    );
}


export default RateButton;