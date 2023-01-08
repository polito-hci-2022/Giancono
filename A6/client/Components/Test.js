import { StyleSheet, Text, View, Button} from 'react-native';
import {Box, HStack, Pressable, Center} from 'native-base';
import Home from './Buttons/home';
import AddToPlants from './Buttons/AddToPlants';
import Back from './Buttons/back';

function Test(){
    const blabla = async () => {
        try{
          const response = await fetch('http://192.168.227.65:3001/api/addPlant', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if(response.ok) {
            return true;
          }
          else {
            const errDetails = await response.text();
            return errDetails;
          }
        } catch(ex){
          throw ex
        }
      }

    return (
        <Box>
            <Text>Recognize</Text>
            <Button onPress={()=>blabla()} title="VAI"></Button>
            <Home/>
            <AddToPlants></AddToPlants>
            <Back/>
        </Box>
    );


}


export default Test;