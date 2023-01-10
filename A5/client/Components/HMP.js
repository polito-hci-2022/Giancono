import { StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {Box, HStack, Pressable, Center, Container} from 'native-base';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' 


function HMP(){

    return(
      <Center>
      <Box flex={1} backgroundColor='#A7C957' borderRadius='80' top='100' width="100%" maxW="300px" alignSelf="center">
        <HStack borderRadius='80' bg="gray" alignItems="center" shadow={6}>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
            
              <Link to="/myplants" style={styles.navItem}>
                <Center>
                  <Icon name='leaf' color='white' size={25}></Icon>
                  <Text style={{color: 'white'}}>Name1</Text>
                </Center>
              </Link>
            </Center>
          </Pressable>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
              <Link to="/myplants"  style={styles.navItem}>
              <Center>
              <Icon name='leaf' color='white' size={25}></Icon>
              <Text style={{color: 'white'}}>Name2</Text>
              </Center>
              </Link>
            </Center>
          </Pressable>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
            
            <Link to="/myplants" style={styles.navItem}>
              <Center>
                  <Icon name='leaf' color='white' size={25}></Icon>
                  <Text style={{color: 'white'}}>Name3</Text>
              </Center>
              </Link>
            </Center>
          </Pressable>
        </HStack>
    </Box></Center>
            
 
    );
}


const styles = StyleSheet.create({
  navItem: {
    alignItems: "center",
    padding:10,
    bottom: 10
  }
});

export default HMP;



            
         
          