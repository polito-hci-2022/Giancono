import {Center, Text, Box} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'



function MeteoWidget(){

    return(
        <Center>
            <Box bg='#A7C957' shadow={5} borderRadius='20' width='300' height='200' top='120'>
                <Center top='4'>
                <Icon name='rainy-outline'  size={100} color='black' ></Icon>
                </Center>
            <Text color='black' left='3' top='10'>01/10/2013</Text>
            <Text color='black' left='3' top='12'>13° - Rain</Text>
            <Text color='black' left='40' top='6'>                      Torino</Text>
                    
            </Box>
        </Center>

    );
}

export default MeteoWidget;

