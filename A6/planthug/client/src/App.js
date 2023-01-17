import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Homepage from './Components/General/Homepage';
import Suggestions from './Components/General/Suggestions';
import Test from './Components/Test';
import Forum from './Components/General/Forum';
import HelpMyPlant from './Components/General/HelpMyPlant';
import NewPost from './Components/General/NewPost';
import MyPlants from './Components/Plants/MyPlants';
import Recognize from './Components/General/Recognize';
import RecognizedPlant from './Components/General/RecognizedPlant';
import AP from './Components/Plants/AP';
import Feedback from './Components/Feedback/Feedback';
import FeedbackSent from './Components/Feedback/Sent';
import ForumPosted from './Components/Forum/Posted';
import Post from './Components/Forum/Post';



let up=[{
  "plantId": "1",
  "name": "Allspice",
  "customName": "Giorgia",
  "watered": 1,
  "repotted": 0,
  "fertilized": 1,
  "description": 'Allspice, also known as Jamaica pepper, myrtle pepper, pimenta, or pimento, is the dried unripe berry of Pimenta dioica, a midcanopy tree native to the Greater Antilles, southern Mexico, and Central America, now cultivated in many warm parts of the world'
},
{
  "plantId": "1",
  "name": "Allspice",
  "customName": "Giorgia",
  "watered": 1,
  "repotted": 0,
  "fertilized": 1,
  "description": 'Allspice, also known as Jamaica pepper, myrtle pepper, pimenta, or pimento, is the dried unripe berry of Pimenta dioica, a midcanopy tree native to the Greater Antilles, southern Mexico, and Central America, now cultivated in many warm parts of the world'
}]

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/suggestions' element={<Suggestions/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/helpmyplant' element={<HelpMyPlant/>}/>
        <Route path='/newpost' element={<NewPost/>}/>
        <Route path='/myplants' element={<MyPlants userPlants={up}/>}></Route>
        <Route path='/plantinfo' element={<MyPlants pi={true}/>}/>
        <Route path='/addplant' element={<AP/>}/>
        <Route path='/added' element={<MyPlants add={true}/>}/>
        <Route path='/undone' element={<MyPlants del={true}/>}/>
        <Route path='/recognize' element={<Recognize/>}/>
        <Route path='/recognize/plant' element={<RecognizedPlant/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/feedback/sent' element={<FeedbackSent/>}/>
        <Route path='/forum/posted' element={<ForumPosted/>}/>
        <Route path='/forum/post' element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
