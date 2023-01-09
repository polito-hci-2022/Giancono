import { StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {Box, HStack, Pressable, Center, Container} from 'native-base';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function PlantNavbar(){

    return(
      <Box flex={1} borderRadius='lg' backgroundColor='#F2E8CF' top='750'  width="100%" maxW="300px" alignSelf="center">
        <HStack borderRadius='lg' bg="gray" alignItems="center" shadow={6}>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
            
              <Link to="/forum" style={styles.navItem}>
                <Center>
                  <Icon name='forum' color='#386641' size={25}></Icon>
                  <Text>Forum</Text>
                </Center>
              </Link>
            </Center>
          </Pressable>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
              <Link to="/suggestions"  style={styles.navItem}>
              <Center>
              <Icon name='lightbulb-on' color='#386641' size={30}></Icon>
              <Text>Suggestions</Text>
              </Center>
              </Link>
            </Center>
          </Pressable>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
            
            <Link to="/recognize" style={styles.navItem}>
              <Center>
                  <Icon name='camera' color='#386641' size={25}></Icon>
                  <Text>Recognize</Text>
              </Center>
              </Link>
            </Center>
          </Pressable>
        </HStack>
    </Box>
            
 
    );
}


const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    top: 700,
    left: 10,
    flexDirection: "row",
  },
  navItem: {
    alignItems: "center",
    padding:10,
    bottom: 10
  },
  container: {
    p:"12",
    rounded:"lg",
  }
});

export default PlantNavbar;



            
         
          