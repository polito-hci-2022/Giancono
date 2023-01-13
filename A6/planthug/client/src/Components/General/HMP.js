import { Container, Row, Col } from 'react-bootstrap';
import {Flower3} from 'react-bootstrap-icons';
import {useNavigate } from 'react-router-dom';

function HMP(){
  const navigate = useNavigate();
    return(
      <Container style={{justifyContent:'center'}}>
        <br></br>
        <h6 style={{textAlign:'center'}}>Visit your plants page!</h6>
        <Container style={{width:'260px', height:'50px', borderRadius:'50px', backgroundColor:'#A7C957', textAlign:'center'}}>
          <Row>
            <Col>
            <Flower3 onClick={()=>navigate('/myplants')}size={30}/>
            <br></br>
            <p style={{fontSize:'15px'}}>Mint</p>
            </Col>
            <Col>
            <Flower3 onClick={()=>navigate('/myplants')} size={30}/>
            <br></br>
            <p style={{fontSize:'15px'}}>Mint</p>
            </Col>
            <Col>
            <Flower3 onClick={()=>navigate('/myplants')} size={30}/>
            <br></br>
            <p style={{fontSize:'15px'}}>Mint</p>
            </Col>
          </Row>
        </Container>
      </Container>

    );
}

export default HMP;



            
         
          