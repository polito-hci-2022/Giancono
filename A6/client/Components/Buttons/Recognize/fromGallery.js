import Icon from 'react-native-vector-icons/Foundation';
import {Link} from 'react-router-native';
import {Center} from 'native-base';
import {Text} from 'react-native';

function FromGallery(){
    return(
        <Link to="/">
            <Center>
                <Icon name='photo' size={28}></Icon>
                <Text>From Gallery</Text>
            </Center>
        </Link>
    );
}


export default FromGallery;