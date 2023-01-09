import { StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {Box, HStack, Pressable, Center, Container} from 'native-base';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TitleBar(props){

    return(
        <Box top='10' alignSelf="center">
            <Pressable top='10' py="3" flex={1}>
                <Text style={styles.titleText}>
                    {props.name !== 'Homepage' && <Icon name='arrow-left' size={50}/>}
                    {props.name}</Text>
            </Pressable>
        </Box>
    );
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
      alignItems: "left",
    }
  });

export default TitleBar;