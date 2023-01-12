import {Link, Box, VStack, Text, Container, Center} from 'native-base';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' ;
import TitleBar from '../General/TitleBar';
import React, { useState } from 'react'

const getUP = async() => {
  const userplantss = await API.getUserPlants()
  .catch((err) => window.alert('Error while getting riddles'));
  setRiddles(riddles);
};

function MyPlants(props){

    return(
      <VStack>
        <TitleBar name='My Plants'/>
        {props.userplants.map((plant)=> <Center><PlantBox plant={plant}/><PlantActions/></Center>)}
      </VStack>
    );
}

function PlantBox(props){

  const[plantStatus,setPS] = useState([false, false, false]);
  console.log(plantStatus);

  return(
  <Center>
        <Box top={20} backgroundColor='#A7C957' width='80' height='50' borderRadius='70'>
            <Container><Text top='3' left='20'>{props.plant}</Text></Container>
            {plantStatus[0] === false && <Container alignSelf='flex-end' paddingRight={30} bottom={2.5}>
            <Icon name='water-outline' size={30}></Icon></Container>}
            {plantStatus[0] === true && <Container alignSelf='flex-end' paddingRight={30} bottom={2.5}>
            <Icon name='water' size={30}></Icon></Container>}

            {plantStatus[1] === false && <Container alignSelf='flex-end' paddingRight={60} bottom={45}>
            <Icon name='pot-outline' size={30}></Icon></Container>}
            {plantStatus[1] === true && <Container alignSelf='flex-end' paddingRight={60} bottom={45}>
            <Icon name='pot' size={30}></Icon></Container>}

            {plantStatus[2] === false && <Container alignSelf='flex-end' paddingRight={100} bottom={75}>
            <Icon name='sack' size={30}/></Container>}
            {plantStatus[2] === true && <Container alignSelf='flex-end' paddingRight={100} bottom={75}>
            <Icon name='sack' size={30}></Icon></Container>}

        </Box><Box height='10'></Box></Center>);
}

function PlantActions(props){
  return(<Container></Container>);
}


export default MyPlants;
