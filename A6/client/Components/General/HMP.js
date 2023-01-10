
import {Link} from 'react-router-native';
import {Box, HStack, Pressable, Center, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
import styles from './styles';

function HMP(){

    return(
      
      <Center >
          <Text paddingTop='20' fontSize='xl'>My Plants</Text>  
          <Box flex={1} backgroundColor='#A7C957' borderRadius='70'  alignSelf="center">
            <HStack borderRadius='80'  bg='#A7C957' alignItems="center" width='80' height='50'>
              <Pressable top='1' cursor="pointer" py="3" flex={1}>
                <Center>
                  <Link to="/myplants" style={styles.navItem}>
                    <Center>
                      <Icon name='leaf' color='black' size={18}></Icon>
                      <Text style={{color: 'black'}}>Mint</Text>
                    </Center>
                  </Link>
                </Center>
              </Pressable>
              <Pressable top='1' cursor="pointer" py="3" flex={1}>
                <Center>
                  <Link to="/myplants"  style={styles.navItem}>
                  <Center>
                  <Icon name='cactus' color='black' size={18}></Icon>
                  <Text style={{color: 'black'}}>Echeveria</Text>
                  </Center>
                  </Link>
                </Center>
              </Pressable>
              <Pressable top='1' cursor="pointer" py="3" flex={1}>
                <Center>
                <Link to="/myplants" style={styles.navItem}>
                  <Center>
                      <Icon name='flower-tulip' color='black' size={18}></Icon>
                      <Text style={{color: 'black'}}>Tulip</Text>
                  </Center>
                  </Link>
                </Center>
              </Pressable>
            </HStack>
          </Box>
      </Center>

    );
}

export default HMP;



            
         
          