import {Text} from 'react-native';
import {Link} from 'react-router-native';
import {Box, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Back from './Buttons/General/back';

function TitleBar(props){

    return(
        <Box top='10' alignSelf="center">
            <Pressable py="3" flex={1}>
                <Text style={styles.titleText}>
                    {props.name !== 'Plant Hug' && <Pressable><Back/></Pressable>}
                    {props.name}</Text>
            </Pressable>
        </Box>
    );
}


export default TitleBar;