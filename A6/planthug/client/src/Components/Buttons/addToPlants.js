import { Form, Modal, Row, Container, Button } from 'react-bootstrap';
import {PlusCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AddToPlants(props){
    const navigate = useNavigate();
    const [submit, setSubmit] = useState();
    const [tmp, setTmp] = useState();
    const [show, setShow] = useState();

    useEffect(() => {
        setShow(false);
      }, [submit]);

      const handleClose = () => {
        setShow(false);
    };

    console.log(props.addP);
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>{setShow(true)}}>
                <PlusCircle size={28} color='black'/>
                <br></br>Add plant
                </h6>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor: '#A7C957'}}>
                <Modal.Title style={{fontSize: 'large'}}>Add a custom name 💕 (optional)</Modal.Title>
                </Modal.Header><Modal.Footer style={{backgroundColor: '#A7C957', justifyContent:'center'}}><Form.Group className="mb-3">
        <Form.Control type="text" placeholder={"Write here"} onChange={ev => {setTmp(ev.target.value);}} required={true} minLength={6}/>
        <Form.Text style={{color: '#A7C957', fontSize: 'small'}}>
          This way, you will distinguish it better in your forest
        </Form.Text><Container><Row><Button style={{backgroundColor: '#386641'}} className='border-0' onClick={ev => {setSubmit(true); if (tmp) props.addP(tmp, props.id, props.photo);
        else props.addP(props.name, props.id, props.photo); if (props.add === 1) navigate('/added'); if (props.add === 2) navigate('/added1'); else navigate('/added')}}>Sumbit</Button></Row></Container></Form.Group></Modal.Footer>
                </Modal>
            </div>
    );
    
}



export default AddToPlants;