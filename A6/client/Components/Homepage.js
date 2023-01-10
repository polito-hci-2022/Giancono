import {Box, Text, Center, Container} from 'native-base';
import {Link} from 'react-router-native';
import {ScrollView} from 'react-native';
import TitleBar from './TitleBar';
import HMP from './HMP';
import TrendingBox from './trending';
import PlantNavbar from './PlantNavbar';

function Homepage(){

    return(
     
      <Center>
        <TitleBar name='Plant Hug'/>
        <HMP/>
        <TrendingBox/>
        <PlantNavbar/>
      </Center>
      

    );
}




export default Homepage;

