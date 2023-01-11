import {NativeRouter, Route, Routes} from 'react-router-native';
import PlantNavbar from './Components/General/PlantNavbar';
import { NativeBaseProvider, Center, Box} from 'native-base';
import Test from './Components/Test';
import MyPlants from './Components/MyPlants/MyPlants';
import Homepage from './Components/General/Homepage';
import { ImageBackground } from 'react-native';
import BGImage from './assets/pl.jpg';

let userplants = [1,2,3]

function App(){
  return (
    <NativeBaseProvider>
      <ImageBackground source={BGImage} resizeMode='cover' style={{width:'100%', height:'100%'}}>
      <NativeRouter>
        <Routes>
          
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/myplants" element={<Center><MyPlants userplants={userplants}/><PlantNavbar/></Center>}/>
         
        </Routes>
        <PlantNavbar/>
      </NativeRouter>
      </ImageBackground>
    </NativeBaseProvider>
  );
}


export default App;