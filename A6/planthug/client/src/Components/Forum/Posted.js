
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function ForumPosted(){
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate('/forum')
        }, 1000);
        return () => clearTimeout(timer);
    })


    
    return(
        <Container style={{justifyContent:'center', textAlign:'center'}}>
            <div style={{paddingTop:'50%'}}>
             <CheckCircle size={180}/>
             <br></br>
             <br></br>
             <h3>Posted!</h3>
            </div>
        </Container>
    );


}



export default ForumPosted;