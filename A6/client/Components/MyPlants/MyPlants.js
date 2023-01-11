import {Link, Box, VStack, Text, Container, Center} from 'native-base';
import { Pressable } from 'react-native';

import TitleBar from '../General/TitleBar';

const getUP = async() => {
  const userplantss = await API.getUserPlants()
  .catch((err) => window.alert('Error while getting riddles'));
  setRiddles(riddles);
};

function MyPlants(props){

    return(
      <VStack>
        <TitleBar name='My Plants'/>
        {props.userplants.map((a)=><Center>
        <Box top={20} backgroundColor='#A7C957' width='80' height='50' borderRadius='70'>
          <Container><Text top='3' left='20'>{a}</Text></Container>
        </Box><Box height='10'></Box></Center>)}
      </VStack>
    );
}

function PlantBox(props){}


export default MyPlants;
