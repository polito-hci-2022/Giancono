import {Button, ScrollView} from 'react-native';
import {Box} from 'native-base';
import Home from './Buttons/General/home';
import AddToPlants from './Buttons/MyPlants/addToPlants';
import Back from './Buttons/General/back';
import NewPostButton from './Buttons/Forum/newPost';
import ReplyButton from './Buttons/Forum/replyButton';
import RateButton from './Buttons/General/rateButton';
import AddPlant from './Buttons/MyPlants/addNew';
import GoToPreview from './Buttons/Forum/goToPreview';
import AddPost from './Buttons/Forum/addPost';
import SendFeedback from './Buttons/General/sendFeedback';
import MyPlantsButton from './Buttons/MyPlants/myPlantsButton';
import UndoButton from './Buttons/General/undoButton';
import GoAhead from './Buttons/Recognize/goahead';
import ChooseAnother from './Buttons/Recognize/chooseAnother';
import FromGallery from './Buttons/Recognize/fromGallery';
import AddButton from './Buttons/General/addButton';
import StayHereButton from './Buttons/Forum/stayHere';
import DiscardButton from './Buttons/Forum/discardPost';
import HMP from './HMP';
import TrendingBox from './trending';

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
            <ScrollView>
              <Button onPress={()=>blabla()} title="VAI"></Button>
              <Home/>
              <AddToPlants></AddToPlants>
              <Back/>
              <NewPostButton/>
              <ReplyButton type={1}/>
              <ReplyButton type={0}/>
              <RateButton/>
              <AddPlant/>
              <GoToPreview/>
              <AddPost/>
              <SendFeedback/>
              <MyPlantsButton/>
              <UndoButton/>
              <GoAhead/>
              <ChooseAnother type={1}/>
              <ChooseAnother type={0}/>
              <FromGallery/>
              <AddButton/>
              <DiscardButton/>
              <StayHereButton/>
              <HMP/>
              <TrendingBox/>
            </ScrollView>
        </Box>
    );


}


export default Test;