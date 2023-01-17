import {Button} from 'react-bootstrap'

const APIURL = 'http://localhost:3001/api'

const getUPlants = async (student) =>{
    const url = APIURL + `/getUP/${student}`;
    try{
        const res = await fetch(url);
        if(res.ok){
            const plants = await res.json();
            plants.sort((c1, c2)=>{return c1.Name > c2.Name})
            console.log(plants)
            return plants;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
    
}


function Test(){
    return(
     <div style={{textAlign:'center'}}>
        <br></br>
        <Button onClick={()=>getUPlants(1)}>testami</Button>
    </div>

    );
}




export default Test;