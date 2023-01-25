import {ArrowCounterclockwise} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Modal, Button, Row } from 'react-bootstrap';

function UndoButton(props){
    const navigate = useNavigate();
    const [submit, setSubmit] = useState();
    const [show, setShow] = useState();

    console.log(props.id);

    useEffect(() => {
        setShow(false);
      }, [submit]);

      const handleClose = () => {
        setShow(false);
    };
    
    if (props.add===1) return(

        <div style={{textAlign:'center'}}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor: '#bc4749'}}>
                <Modal.Title style={{color:'white'}}>Are you sure? The plant will no longer be in My Plants</Modal.Title>
                </Modal.Header><Modal.Footer style={{backgroundColor: '#bc4749', justifyContent:'space-between'}}>
        <h6 className="text-light">
          The action is irreversible
        </h6><Button style={{backgroundColor: 'white', color: '#bc4749'}} className='border-0' onClick={ev => {props.deletePID(props.id);setSubmit(true);navigate('/undone1');}}>Delete it</Button></Modal.Footer>
                </Modal>
            <h6 onClick={()=>{setShow(true)}}>
            <ArrowCounterclockwise size={28} color='black'/>
            <br></br>Undo
            </h6>
        </div>
);
    else if (props.add===2) return(

        <div style={{textAlign:'center'}}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor: '#bc4749'}}>
                <Modal.Title style={{color:'white'}}>Are you sure? The plant will no longer be in My Plants</Modal.Title>
                </Modal.Header><Modal.Footer style={{backgroundColor: '#bc4749', justifyContent:'space-between'}}>
        <h6 className="text-light">
          The action is irreversible
        </h6><Button style={{backgroundColor: 'white', color: '#bc4749'}} className='border-0' onClick={ev => {props.deletePID(props.id);setSubmit(true);navigate('/undone2');}}>Delete it</Button></Modal.Footer>
                </Modal>
            <h6 onClick={()=>{setShow(true)}}>
            <ArrowCounterclockwise size={28} color='black'/>
            <br></br>Undo
            </h6>
        </div>
);
    else 
    return(

            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>navigate('/undone')}>
                <ArrowCounterclockwise size={28} color='black'/>
                <br></br>Undo
                </h6>
            </div>
    );
}


export default UndoButton;