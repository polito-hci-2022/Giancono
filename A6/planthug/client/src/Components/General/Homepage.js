import TitleBar from './Titlebar';
import PlantNavbar from './PlantNavbar';
import HMP from './HMP';
import InfoBox from './info'

function Homepage(){

    return(
     <div style={{textAlign:'center'}}>
        <TitleBar name='Plant Hug'/>
        <PlantNavbar/>
        <HMP/>
        <InfoBox/>
        
    </div>

    );
}




export default Homepage;