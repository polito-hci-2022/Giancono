import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Components/General/Homepage';
import Suggestions from './Components/Suggestions';
import Test from './Components/Test';

let up=[{
  "plantId": "1",
  "name": "Allspice",
  "customName": "Giorgia",
  "watered": 1,
  "repotted": 0,
  "fertilized": 1
}]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/suggestions' element={<Suggestions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
