import React, { useCallback, useState, useEffect } from 'react';
import { Container } from '../../styles/components';
import Logo from '../../assets/logo2.png';

import { BoxForm, Header } from './style';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Formik, Form as FormControl } from 'formik';
import { Toast } from '../../components';
import api from '../../config/api';
import { clearStorage } from '../../config/auth';
import { useHistory, useLocation } from 'react-router-dom';

function RegisterPage() {

    let history = useHistory();
    let location = useLocation();
    
    const [ isLoading, setStateLoading ] = useState(false);
    const [ feedbackMessage, setFeedbackMessage ] = useState(null);

    useEffect(() => {
        
        clearStorage();

    }, []);

    const handleSubmit = (values, setSubmitting) => {

        setStateLoading(true);

        api.post('user/signup-admin', values).then(({ data }) => {

            const { message } = data.body;


            setFeedbackMessage(message);

            let { from } = location.state || { from: { pathname: "/login" } };

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
            <BoxForm>
                <Header>
                    <img src={Logo}  width={200}/>
                    <p>Faça seu cadastro abaixo, informando seu email e senha de preferência.</p>
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
                                    value={values.senha} 
                                    type="password" 
                                    placeholder="Password" />
                            </Form.Group>
                            {isLoading && (<Spinner animation="border" variant="primary" />)}
                            
                            <Button block 
                                disabled={isSubmitting} 
                                variant="success" type="submit">
                                {isSubmitting ? 'Criando...' : 'Criar Conta'}
                            </Button>

                            <Button block 
                                variant="link" 
                                onClick={() => history.push('/login')}>Voltar para login
                            </Button>

                        </FormControl> 
                    )}
                </Formik>
                
            </BoxForm>
            { visibleToast() }
        </Container>
    )
}

export default RegisterPage