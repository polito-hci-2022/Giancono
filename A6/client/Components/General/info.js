
import {Pressable, Center, Text, Box} from 'native-base';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  Icon2 from 'react-native-vector-icons/Ionicons'

function InfoBox(){

    return(
        <Center>
            <Box backgroundColor='#e6e6e6'  borderRadius='50'  width='350' height='380' top='100'>  
                <Center top='4'>
                <Text>Weather</Text>
                <Icon2 name='rainy-outline'  size={100} color='black' ></Icon2>
                </Center>
            <Text color='black' left='3' top='10'>01/10/2013</Text>
            <Text color='black' left='3' top='10'>13° - Rain</Text>
            <Text color='black' left='40' top='6'>                                   Torino</Text>
    
            <Center>
                <Text top='11'>---------------------------------------------------------------------------------------</Text>
                <Text top='11' fontSize='xl'>TRENDING</Text>
            </Center>
            <Pressable position='absolute' top='280' left='8' >
                <Icon name='newspaper-o' size={40}/>
            </Pressable>
            <Text position='absolute' top='73%' right='10' width='60%'  textAlign='center' fontSize='sm'>Is that new insect from Asia a menace for our plants?</Text>
            </Box>
        </Center>

    );
}

export default InfoBox;