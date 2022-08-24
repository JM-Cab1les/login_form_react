import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgicon from '../images/user.png'
import uiimg from '../images/images.png'
import './login.css'


const Login = () => {
  return (
    <>
    <Container className="mt-5 container-form">
        <Row>
            <Col lg={4} md={6} sm={12} className="mt-5 p-3">
                <h2 className='text-center title-form'>Login Form</h2>
                <div className='icon-container'>
                    <img className='icon-img' src={imgicon} alt='icon' />
                </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary btn-block" type="submit" className='w-100'>
                 Submit
                </Button>
                <div className="text-left bottom-text mt-3">
                    <a href="#"><small className='reset mr-2'>Password Reset</small></a> II 
                    <a href="#"><small className='reset '>Quick Recover</small></a>
                </div>
             </Form>
            </Col>
            <Col lg={8} md={6} sm={12} className='img-container'>
                <img src={uiimg} className="w-100"/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Login