import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import '../styles/Login.css';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {   

        const [formData, setFormData] = useState({            
            email: "",
            pwd: ""
        })
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);
        }
    
        const handleChange = (e) => {        
            const{name, value}= e.target;
            setFormData({...formData, [name]:value })
        }

        return (
            <Container>
            <h1>Login Form</h1>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="pwd" value={formData.pwd} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>


            </Form>
            </Container>
        );
}

export default Login
