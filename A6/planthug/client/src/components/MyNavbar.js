import '../App.css';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BackButton } from './BackButton';

function MyNavbar(props) {
        return (
                <Navbar bg='light' className='py-1'>
                        {props.title !== 'PLANT HUG' && <BackButton/>}
                    <Container fluid>
                        <Navbar.Brand className='text-dark' href=''>
                            <h1>{props.title}</h1>
                        </Navbar.Brand><i className='bi bi-leaf'></i>
                        </Container>   
                </Navbar>
        )
}

export { MyNavbar };