import {XCircleFill} from 'react-bootstrap-icons';

function ChooseAnother(props){
    function upload(){
        document.getElementById("selectImage").click()
    }

    return(
            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>upload()}>
                <input id='selectImage' hidden type="file" onChange={(event)=>props.handleChange(event)} />
                <XCircleFill size={28} color='black'/>
                <br></br>No, choose another
                </h6>
            </div>
    );
}



export default ChooseAnother;