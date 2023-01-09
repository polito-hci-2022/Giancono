import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function Home(){
    return(
        <Link to="/">
            <Center>
                <Icon name='home' size={28}></Icon>
                <Text>Home</Text>
            </Center>
        </Link>
    );
}


export default Home;