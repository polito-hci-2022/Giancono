import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {Flower3} from 'react-bootstrap-icons';
import {useNavigate } from 'react-router-dom';

function HMP(props){
  const navigate = useNavigate();
    return(
      <Container style={{justifyContent:'center'}}>
        <br></br>
        <h6 style={{textAlign:'center'}}>Visit your plants page!</h6>
        <Container style={{width:'260px', height:'80px', borderRadius:'50px', backgroundColor:'#A7C957', textAlign:'center'}}>
          <Row>
            <Col><p></p>
              {props.up && props.up.length > 0 && <Image src={props.up[0].photo} style={{width:'40px', height:'40px'}} className="rounded-circle" alt="Circular Image" onClick={() => navigate('/myplants')}/>}
            <br></br>
            </Col>
            <Col><p></p>{props.up && props.up.length === 1 && <Col><p/><Flower3 size={40}/><br/></Col>}
            {props.up && props.up.length > 1 && <Image src={props.up[1].photo} style={{width:'40px', height:'40px'}} className="rounded-circle" alt="Circular Image" onClick={() => navigate('/myplants')}/>}
            <br></br>
            </Col>
            <Col><p></p>
            {props.up && props.up.length > 2 && <Image src={props.up[2].photo} style={{width:'40px', height:'40px'}} className="rounded-circle" alt="Circular Image" onClick={() => navigate('/myplants')}/>}
            {props.up && props.up.length === 2 && <Col><p/><Flower3 size={40}/><br/></Col>}
            {props.up && props.up.length === 1 && <Col><p/><Flower3 size={40}/><br/></Col>}
            <br></br>
            </Col>
          </Row>
        </Container>
      </Container>

    );
}

export default HMP;



            
         
          