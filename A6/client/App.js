import {NativeRouter, Route, Routes} from 'react-router-native';
import PlantNavbar from './Components/PlantNavbar';
import { NativeBaseProvider } from 'native-base';
import Test from './Components/Test';

function App(){
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
            <Route exact path="/" element={<PlantNavbar/>} />
            <Route path="/test" element={<Test/>}/>
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
}


export default App;