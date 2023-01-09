import { StyleSheet} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import PlantNavbar from './Components/PlantNavbar';
import TitleBar from './Components/TitleBar';
import HMP from './Components/HMP';
import MyPlants from './Components/MyPlants';
import { NativeBaseProvider, Container, Center } from 'native-base';
import Recognize from './Components/Recognize';

function App(){
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
            <Route exact path="/" element={<Center><TitleBar name='Homepage'/><HMP/><PlantNavbar/></Center>} />
            <Route path="/recognize" element={<Center><TitleBar name='Recognize' previous='/'/><Recognize/><PlantNavbar/></Center>}/>
            <Route path="/myplants" element={<Center><TitleBar name='My Plants' previous='/'/><MyPlants/><PlantNavbar/></Center>}/>
        </Routes>
      
      </NativeRouter>
    </NativeBaseProvider>
  );
}


export default App;