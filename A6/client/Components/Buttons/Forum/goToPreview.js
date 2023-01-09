import Icon from 'react-native-vector-icons/Fontisto';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../styles';

function GoToPreview(){
    return(
        <Link to="/" style={styles.navItem}>
            <Center>
              <Icon name='preview' size={28}></Icon>
              <Text>Go to Preview</Text>
            </Center>
        </Link>
    );
}


export default GoToPreview;