import api from '../../../config/api';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Button, Container, FormGroup, Grid, HintForm, InputField, LabelForm, Row, SelectField } from '../../../styles/components';
import { Formik, Form } from 'formik';
import { useLocation } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import { Menu } from '../../../components';

import { Button as ButtonMaterial } from 'react-bootstrap';
import { getToken } from '../../../config/auth';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function DetailProductPage({ properties_folder, dispatch, history}) {


    let productMapper = { 
        marca: '',
        nome: '',
        unidade: ''
    };
    
    const location = useLocation();
    const { state } = location; 

    if (state && state.isEdit) {
        productMapper = {...state}
    }

    const createBodyFormData = useCallback((values) => {

        const bodyFormData = new FormData();

        for(const prop in values) {

            if (prop != 'id' && prop !== 'isEdit') {
                bodyFormData.append(prop, values[prop]);
            }
            
        }

        return bodyFormData;

    }, []);

    return (
        <React.Fragment>
            <Menu/>
            <Container>
                <header className="heading">
                    <div className="row">
                        <h1>{ state && state.isEdit ? 'Editar Produto' : 'Criar Produto' }</h1>
                        <ButtonMaterial variant="link" onClick={() => history.goBack()}> 
                            <span className="material-icons">arrow_back</span> Voltar
                        </ButtonMaterial>
                    </div>
                </header>
                <Formik
                    initialValues={productMapper}
                    onSubmit={(values, { setSubmitting }) => {

                        const payload = {
                            marca: values.marca,
                            unidade: values.unidade,
                            nome: values.nome
                        };

                        if (state && state.isEdit) {
                            // editar
                            api.put(`product/edit/${state.id}`, payload, {
                                headers: { Authorization: `Bearer ${getToken()}`}
                            })
                            .then(response => {

                                alert('Produto atualizado');
                                history.goBack();

                            }, error => {
                                console.log(error);
                            });


                        } else {


                            api.post('product/create', values, {
                                headers: { Authorization: `Bearer ${getToken()}`}
                            })
                            .then(response => {
                                alert('Produto cadastrado');
                                history.goBack();

                            }, error => {
                                console.log(error);
                            });

                        }

                        setTimeout(() => {

                            setSubmitting(false);
                        }, 400);

                    }}
                    >
                    {({ isSubmitting, setFieldValue, values, handleChange, handleBlur }) => (
                        <Form>
                            <Row>
                                <Grid size={4}>
                                    <FormGroup>
                                        <LabelForm>Nome</LabelForm>
                                        <InputField 
                                            required 
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nome} 
                                            name="nome" />
                                    </FormGroup>
                                </Grid>
                                <Grid size={4}>
                                    <FormGroup>
                                        <LabelForm>Marca</LabelForm>
                                        <InputField
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.marca} 
                                            required 
                                            type="text" 
                                            name="marca" />
                                    </FormGroup>
                                </Grid>
                                <Grid size={4}>
                                    <FormGroup>
                                        <LabelForm>Unidade</LabelForm>
                                        <SelectField 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.unidade}
                                            required name="unidade">
                                            <option value="CADA">CADA</option>
                                            <option value="KG">KG</option>
                                            <option value="100G">100G</option>
                                            <option value="BANDEJA">BANDEJA</option>
                                        </SelectField>
                                    </FormGroup>
                                </Grid>
                                <Grid>
                                    <Button  type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                                    </Button>
                                </Grid>
                            </Row>
                    
                        </Form>
                    )}
                </Formik>
            </Container>
        </React.Fragment>
    )

}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  withRouter(connect(mapStateToProps)(DetailProductPage));