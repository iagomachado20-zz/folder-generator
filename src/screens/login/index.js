import React, { useCallback, useState, useEffect } from 'react';
import { Container } from '../../styles/components';
import Logo from '../../assets/logo2.png';

import { BoxForm, Header } from './style';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Formik, Form as FormControl } from 'formik';
import { Menu, Toast } from '../../components';
import api from '../../config/api';
import { clearStorage, setToken } from '../../config/auth';
import useAuth from '../../hooks/auth';
import { useHistory, useLocation } from 'react-router-dom';

function LoginPage() {

    const auth = useAuth();
    let history = useHistory();
    let location = useLocation();
    
    const [ isLoading, setStateLoading ] = useState(false);
    const [ feedbackMessage, setFeedbackMessage ] = useState(null);

    useEffect(() => {
        
        clearStorage();

    }, []);

    const handleSubmit = (values, setSubmitting) => {

        setStateLoading(true);

        api.post('user/login', values).then(({ data }) => {

            const { token, message } = data.body;


            setFeedbackMessage(message);
            setToken(token);

            auth.user = token;
            auth.signin(token => {
                history.push('/produtos');
            });


            setSubmitting(false);
            setStateLoading(false);


        }, error => {

            setFeedbackMessage('Dados inválidos. Tente novamente.');
            setSubmitting(false);
            setStateLoading(false);

        });

    };

    const visibleToast = useCallback(() => {

        return (
            <Toast 
                text={feedbackMessage} 
                onClose={() => setFeedbackMessage(null)}/>
        );

    }, [feedbackMessage]);

    return (
        <Container>
            <Menu/>
            <BoxForm>
                <Header>
                    <img src={Logo}  width={200}/>
                    <p>Informe abaixo seu email e sua senha:</p>
                </Header>
                <Formik 
                    initialValues={{ email: '', senha: '' }}
                    onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}>
                    {({ isSubmitting, values, handleChange }) => (
                        <FormControl>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    value={values.email} 
                                    required
                                    onBlur={handleChange}
                                    onChange={handleChange}
                                    type="email" 
                                    placeholder="Insira seu email" />
                            </Form.Group>

                            <Form.Group controlId="senha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    required 
                                    onBlur={handleChange}
                                    onChange={handleChange}
                                    value={values.password} 
                                    type="password" 
                                    placeholder="Password" />
                            </Form.Group>
                            {isLoading && (<Spinner animation="border" variant="primary" />)}
                            
                            <Button block 
                                disabled={isSubmitting} 
                                variant="success" type="submit">
                                {isSubmitting ? 'Acessando...' : 'Acessar'}
                            </Button>

                            <Button block 
                                variant="link" 
                                onClick={() => history.push('/cadastro')}>Cadastre-se agora 
                            </Button>

                        </FormControl> 
                    )}
                </Formik>
                
            </BoxForm>
            { visibleToast() }
        </Container>
    )
}

export default LoginPage