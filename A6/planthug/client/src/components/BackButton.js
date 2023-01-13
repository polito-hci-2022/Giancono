import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';

function BackButton(){
    let navigate = useNavigate();
    return(
    <Button variant='light' onClick={() => navigate(-1)}>
    <i className='bi bi-arrow-left'></i></Button>);
};

export {BackButton};