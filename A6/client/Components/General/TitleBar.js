import {Text} from 'react-native';
import {Box, Pressable} from 'native-base';
import styles from './styles';
import Back from '../Buttons/General/back';

function TitleBar(props){

    return(
        <Box top='10' alignSelf="center" backgroundColor='white'>
            <Pressable>
                <Text style={styles.titleText}>
                    {props.name !== 'Plant Hug' && <Pressable><Back/></Pressable>}
                    {props.name}</Text>
            </Pressable>
        </Box>
    );
}


export default TitleBar;