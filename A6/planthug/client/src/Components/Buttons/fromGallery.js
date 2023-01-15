import {Image} from 'react-bootstrap-icons';

function FromGallery(props){
    function upload(){
        document.getElementById("selectImage").click()
    }

    return(
            <div style={{textAlign:'center'}}>
                <h6 onClick={()=>upload()}>
                <input id='selectImage' hidden type="file" onChange={(event)=>props.handleChange(event)} />
                <Image size={28} color='black'/>
                <br></br>From Gallery
                </h6>
            </div>
    );
}

export default FromGallery;