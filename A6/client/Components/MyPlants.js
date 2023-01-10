
import {Container} from 'native-base';
import { DataTable } from 'react-native-paper';
import TitleBar from './TitleBar';
import {Box, HStack, Pressable, Center, Text} from 'native-base';
import ForumButton from './Buttons/Forum/forumButton';
import RecognizeButton from './Buttons/Recognize/recognizeButton';
import SuggestionsButton from './Buttons/Suggestions/suggestionsButton';

function MyPlants(props) {
  
    return(
        <Center>
        <TitleBar name='My Plants'/>
        <Box flex={1} top='100'  width="100%">
        <DataTable striped>
            <DataTable.Header>
                <DataTable.Title><Text>Photo</Text></DataTable.Title>
                <DataTable.Title><Text>Name</Text></DataTable.Title>
                <DataTable.Title><Text>Alert</Text></DataTable.Title>
        </DataTable.Header>
        props.userplants.map(<PlantRow></PlantRow>)
        </DataTable>
        </Box>
        </Center>
    );
}

function PlantRow(props) {
    return <Container></Container>
}


  function RiddleRow(props) {
    
    return(
      <Container>
      </Container>
    );
  }
  
  function RiddleData(props) {
  
    return(
      <Container>
      </Container>
    );
  }

export default MyPlants;