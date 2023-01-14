
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Components/General/Homepage';
import Test from './Components/Test';
import Forum from './Components/General/Forum';
import HelpMyPlant from './Components/General/HelpMyPlant';
import NewPost from './Components/General/NewPost';
import MyPlants from './Components/General/MyPlants';
import AP from './Components/General/AP';


let up=[{
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
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/helpmyplant' element={<HelpMyPlant/>}/>
        <Route path='/newpost' element={<NewPost/>}/>
        <Route path='/myplants' element={<MyPlants userPlants={up}/>}></Route>
        <Route path='/plantinfo' element={<MyPlants pi={true}/>}/>
        <Route path='/addplant' element={<AP/>}/>
        <Route path='/added' element={<MyPlants add={true}/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
