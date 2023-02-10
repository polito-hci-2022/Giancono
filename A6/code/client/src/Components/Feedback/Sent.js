
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function FeedbackSent(){
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate('/')
        }, 2000);
        return () => clearTimeout(timer);
    })


    
    return(
        <Container style={{justifyContent:'center', textAlign:'center'}}>
            <div style={{paddingTop:'50%'}}>
             <CheckCircle size={180}/>
             <br></br>
             <br></br>
             <h3>Feedback sent!</h3>
             <br></br>
             <br></br>
             <p>Thank you!</p>
             <p>We will use this feedback to improve our suggestions</p>
            </div>
        </Container>
    );


}



export default FeedbackSent;