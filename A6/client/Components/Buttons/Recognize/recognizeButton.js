import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';
import styles from '../../styles';

function RecognizeButton(){
    return(
        <Link to="/recognize" style={styles.navItem}>
            <Center>
                <Icon name='camera' size={28}></Icon>
                <Text>Recognize</Text>
            </Center>
        </Link>
    );
}


export default RecognizeButton;