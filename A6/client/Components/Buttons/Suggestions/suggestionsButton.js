import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../styles';

function SuggestionsButton(){
    return(
        <Link to="/suggestions"  style={styles.navItem}>
            <Center>
              <Icon name='lightbulb-on' size={28}></Icon>
              <Text>Suggestions</Text>
            </Center>
        </Link>
    );
}


export default SuggestionsButton;