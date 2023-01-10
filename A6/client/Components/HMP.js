
import {Link} from 'react-router-native';
import {Box, HStack, Pressable, Center, Container, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 
import styles from './styles';

function HMP(){

    return(
      
      <Center>
          <Text paddingTop='20' fontSize='xl'>My Plants</Text>  
          <Box flex={1} backgroundColor='#A7C957' borderRadius='80'  alignSelf="center">
            <HStack borderRadius='80' bg="gray" alignItems="center" shadow={6} width='80' height='50'>
              <Pressable top='3' cursor="pointer" py="3" flex={1}>
                <Center>
                  <Link to="/myplants" style={styles.navItem}>
                    <Center>
                      <Icon name='leaf' color='white' size={20}></Icon>
                      <Text style={{color: 'white'}}>Name1</Text>
                    </Center>
                  </Link>
                </Center>
              </Pressable>
              <Pressable top='3' cursor="pointer" py="3" flex={1}>
                <Center>
                  <Link to="/myplants"  style={styles.navItem}>
                  <Center>
                  <Icon name='leaf' color='white' size={20}></Icon>
                  <Text style={{color: 'white'}}>Name2</Text>
                  </Center>
                  </Link>
                </Center>
              </Pressable>
              <Pressable top='3' cursor="pointer" py="3" flex={1}>
                <Center>
                <Link to="/myplants" style={styles.navItem}>
                  <Center>
                      <Icon name='leaf' color='white' size={20}></Icon>
                      <Text style={{color: 'white'}}>Name3</Text>
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



            
         
          