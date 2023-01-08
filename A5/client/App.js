import { StyleSheet} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import PlantNavbar from './Components/PlantNavbar';
import { NativeBaseProvider } from 'native-base';
import Recognize from './Components/Recognize';

function App(){
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
            <Route exact path="/" element={<PlantNavbar/>} />
            <Route path="/recognize" element={<Recognize/>}/>
        </Routes>
      
      </NativeRouter>
    </NativeBaseProvider>
  );
}


export default App;