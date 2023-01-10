import {NativeRouter, Route, Routes} from 'react-router-native';
import PlantNavbar from './Components/PlantNavbar';
import { NativeBaseProvider, Center } from 'native-base';
import Test from './Components/Test';
import MyPlants from './Components/MyPlants';
import TitleBar from './Components/TitleBar';
import Homepage from './Components/Homepage';

function App(){
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/test" element={<Test/>}/>
            <Route path="/myplants" element={<Center><TitleBar name='My Plants'/><MyPlants/><PlantNavbar/></Center>}/>
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
}


export default App;