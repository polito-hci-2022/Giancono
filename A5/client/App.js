import { StyleSheet} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import PlantNavbar from './Components/PlantNavbar';
import TitleBar from './Components/TitleBar';
import HMP from './Components/HMP';
import MyPlants from './Components/MyPlants';
import { NativeBaseProvider, Container } from 'native-base';
import Recognize from './Components/Recognize';

function App(){
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
            <Route exact path="/" element={<Container><TitleBar name='Homepage'/><HMP/><PlantNavbar/></Container>} />
            <Route path="/recognize" element={<Recognize/>}/>
            <Route path="/myplants" element={<Container><TitleBar name='My Plants'/><MyPlants/><PlantNavbar/></Container>}/>
        </Routes>
      
      </NativeRouter>
    </NativeBaseProvider>
  );
}


export default App;