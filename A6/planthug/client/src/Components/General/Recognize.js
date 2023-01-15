import { CameraFill, CircleFill } from "react-bootstrap-icons";
import { Container, Row, Button } from 'react-bootstrap';
import PlantNavbar from './PlantNavbar';
import TitleBar from './Titlebar';
import Home from '../Buttons/home';
import FromGallery from '../Buttons/fromGallery';
import TakeAgain from '../Buttons/takeAgain';
import GoAhead from '../Buttons/goahead';
import ChooseAnother from "../Buttons/chooseAnother";
import { useRef, useEffect, useState } from "react";

function Recognize(){
    const [taken, setTaken] = useState(0); //-1 gallery, 1 photo
    const [file, setFile] = useState();

    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);

    useEffect(() => {
        getVideo();
      }, [videoRef]);

      function handleChange(e) {
            setTaken(-1);
            setFile(URL.createObjectURL(e.target.files[0]));
        }

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error("error:", err);
        });
    };

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");
    
        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;
    
        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 200);
    };

    const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;
    
        const data = photo.toDataURL("image/jpeg");

        setTaken(1);
    
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        if(strip.firstChild !== null)
            strip.replaceChild(link, strip.firstChild)
        else
            strip.insertBefore(link, strip.firstChild);
    };

    return(
        <>
            <div className={'h-100 ' + (taken === 0 ? 'd-block' : 'd-none')}>
                <Container>
                    <TitleBar name='Recognize' icon={<CameraFill />} />
                </Container>
                <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
                    <Row className="w-75">
                        <span className='text-center'>
                            Shoot a photo and we will <b>try</b> to guess wich plant it is
                        </span>
                    </Row>
                    <Row className="d-flex flex-column align-items-center">
                        <div className="overflow-hidden rounded-2 p-0" style={{border: '2px solid #386641'}}>
                            <video className="h-100" onCanPlay={() => paintToCanvas()} ref={videoRef} />
                            <canvas className="d-none" ref={photoRef} />
                        </div>
                        <span className="text-center mt-2">
                            <Button onClick={() => takePhoto()} className="rounded-circle p-1" style={{backgroundColor: '#F2E8CF', borderWidth: 0, boxShadow: 'none', outline: 'none'}}>
                                <CircleFill style={{width: '10vw', height: '10vw'}}/>
                            </Button>
                        </span>
                    </Row>
                    <Row>
                        <PlantNavbar i2={<Home/>} i3={<FromGallery handleChange={handleChange}/>}/>
                    </Row>
                </Container>
            </div>
            <div className={'h-100 ' + (taken === 1 ? 'd-block' : 'd-none')}>
                <Container>
                    <TitleBar name='Preview'/>
                </Container>
                <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
                    <Row>
                        <div ref={stripRef} />
                    </Row>
                    <Row>
                        <span className="text-center">This is your photo. Do you want to keep it?</span>
                    </Row>
                    <Row>
                        <PlantNavbar i1={<TakeAgain setTaken={setTaken}/>} i3={<GoAhead/>}/>
                    </Row>
                </Container>
            </div>
            <div className={'h-100 ' + (taken === -1 ? 'd-block' : 'd-none')}>
                <Container>
                    <TitleBar name='Preview'/>
                </Container>
                <Container fluid className='h-100 d-flex flex-column align-items-center justify-content-around'>
                    <Row>
                        <img src={file} style={{maxWidth: '100%', overflow: 'hidden', objectFit: 'cover'}}/>
                    </Row>
                    <Row>
                        <span className="text-center">You chose this photo. Do you want to keep it?</span>
                    </Row>
                    <Row>
                        <PlantNavbar i1={<ChooseAnother handleChange={handleChange}/>} i3={<GoAhead/>}/>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Recognize;