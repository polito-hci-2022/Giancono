import { StyleSheet, Text, View, Button} from 'react-native';
import {Box, HStack, Pressable, Center} from 'native-base';

function Recognize(){
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
        </Box>
    );


}


export default Recognize;