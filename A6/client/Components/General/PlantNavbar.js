import {Box, HStack, Pressable, Center, Text, NativeBaseProvider} from 'native-base';
import ForumButton from '../Buttons/Forum/forumButton';
import RecognizeButton from '../Buttons/Recognize/recognizeButton';
import SuggestionsButton from '../Buttons/Suggestions/suggestionsButton';


import {Link} from 'react-router-native';


function PlantNavbar(){

    return(

        <Box  flex={1} borderRadius='lg' safeAreaTop top='15%'  width="100%" maxW="300px" alignSelf="center">
          <HStack safeAreaBottom shadow={6} borderRadius='lg' bg="#F2E8CF" alignItems="center" >
            <Pressable cursor="pointer" py="3" flex={1}>
              <Center>
                <ForumButton/>
              </Center>
            </Pressable>
            <Pressable  cursor="pointer" py="3" flex={1}>
              <Center>
                <SuggestionsButton/>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" py="3" flex={1}>
              <Center>
                <RecognizeButton/>
              </Center>
            </Pressable>
          </HStack>
      </Box>
   
    );
}




export default PlantNavbar;



