import {Link, Box, VStack, Text} from 'native-base';

import TitleBar from './TitleBar';
import HMP from './HMP';
import TrendingBox from './trending';
import MeteoWidget from './meteo';

import InfoBox from './info';

function Homepage(){

    return(
     <Box>
      <VStack>
        <TitleBar name='Plant Hug'/>
        <HMP/>
        <InfoBox/>
      </VStack>
     
    </Box>

    );
}




export default Homepage;

