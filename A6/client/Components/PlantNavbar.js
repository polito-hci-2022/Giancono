import {Box, HStack, Pressable, Center, Text} from 'native-base';
import ForumButton from './Buttons/Forum/forumButton';
import RecognizeButton from './Buttons/Recognize/recognizeButton';
import SuggestionsButton from './Buttons/Suggestions/suggestionsButton';

import {Link} from 'react-router-native';


function PlantNavbar(){

    return(
      <Box flex={1} borderRadius='lg' bg="white" top='750'  width="100%" maxW="300px" alignSelf="center">
        <Link to="/test"><Text>TESTA CLICCANDOMI</Text></Link>
        <HStack borderRadius='lg' bg="gray" alignItems="center" shadow={6}>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
              <ForumButton/>
            </Center>
          </Pressable>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
              <SuggestionsButton/>
            </Center>
          </Pressable>
          <Pressable top='5' cursor="pointer" py="3" flex={1}>
            <Center>
              <RecognizeButton/>
            </Center>
          </Pressable>
        </HStack>
    </Box>
    );
}




export default PlantNavbar;



