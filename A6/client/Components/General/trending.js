import {Pressable, Center, Text, Box} from 'native-base';
import  Icon  from 'react-native-vector-icons/FontAwesome';


function TrendingBox(){

    return(
        <Center>
            <Box backgroundColor='#888888'  borderRadius='50'  width='80' height='130' top='20'>
                    <Center>
                        <Text paddingBottom='20' fontSize='xl'>TRENDING</Text>
                    </Center>
                    <Pressable position='absolute' top='12' left='8' >
                        <Icon name='newspaper-o' size={40}/>
                    </Pressable>
                    <Text position='absolute' top='35%' right='10' width='60%'  textAlign='center' fontSize='sm'>Is that new insect from Asia a menace for our plants?</Text>
            </Box>
        </Center>

    );
}

export default TrendingBox;

