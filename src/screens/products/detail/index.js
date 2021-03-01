import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Container, FormGroup, Grid, HintForm, InputField, LabelForm, Row, SelectField } from '../../../styles/components';
import { Formik, Form } from 'formik';
import { useLocation } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import api, { BASE_SERVER } from '../../../config/api';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function DetailProductPage({ properties_folder, dispatch, history}) {


    let productMapper = { 
        imagem: '',
        marca: '',
        nome: '',
        unidade: '',
        gramatura: ''
    };
    
    const location = useLocation();
    const { state } = location; 

    
    const [ imageProduct, setImageProduct ] = useState(state ? `${BASE_SERVER}${state.imagem}` : null);

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

    const setFieldImage = async (event, method) => {

        const file = event.currentTarget.files[0];

        if (file) {
            const file64 = await toBase64(file);

            method("imagem", file);
            setImageProduct(file64);
        }        

    };

    return (
        <React.Fragment>
            <Container>
            <header className="heading">
                <div className="row">
                    <h1>{ state && state.isEdit ? 'Editar Produto' : 'Criar Produto' }</h1>
                    <button className="back-button" onClick={() => history.goBack()}> 
                        <span className="material-icons">arrow_back</span> Voltar
                    </button>
                </div>
            </header>
            <Formik
                initialValues={productMapper}
                onSubmit={(values, { setSubmitting }) => {

                    const headers = { "Content-Type": "multipart/form-data" };

                    const valuesFormData = createBodyFormData(values);

                    if (state && state.isEdit) {
                        // editar
                        api.put(`product/edit/${state.id}`, valuesFormData, { ...headers, timeout: 200000 })
                        .then(response => {

                            alert('Produto atualizado');
                            history.goBack();

                        }, error => {
                            console.log(error);
                        });


                    } else {


                        api.post('product/create', valuesFormData, { ...headers, timeout: 200000 })
                        .then(response => {
                            alert('Produto cadastrado');
                            history.goBack();

                        }, error => {
                            console.log(error);
                        });

                    }

                    setTimeout(() => {
                        
                        // console.log(values);

                        setSubmitting(false);
                    }, 400);

                }}
                >
                {({ isSubmitting, setFieldValue, values, handleChange, handleBlur }) => (
                    <Form>
                        <Row>
                            <Grid size={6}>
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
                            <Grid size={6}>
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
                            <Grid size={6}>
                                <FormGroup>
                                    <LabelForm>Gramatura</LabelForm>
                                    <InputField
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gramatura} 
                                        required type="text" 
                                        name="gramatura" />
                                </FormGroup>
                            </Grid>
                            <Grid size={6}>
                                <FormGroup>
                                    <LabelForm>Unidade</LabelForm>
                                    <SelectField 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.unidade}
                                        required name="unidade">
                                        <option disabled>Selecione</option>
                                        <option value="CADA">CADA</option>
                                        <option value="KG">KG</option>
                                    </SelectField>
                                </FormGroup>
                            </Grid>
                            <Grid size={12}>
                                { imageProduct && ( <img width="100" src={imageProduct}/> ) }
                                <FormGroup>
                                    <LabelForm>Imagem</LabelForm>
                                    <InputField
                                        accept="image/*"
                                        onChange={(event) => setFieldImage(event, setFieldValue)}
                                        onBlur={(event) => setFieldImage(event, setFieldValue)}
                                        required={state === undefined || state === null} type="file" name="imagem" />
                                    <HintForm>Sua imagem deve ter no máximo 100KB</HintForm>    
                                </FormGroup>
                            </Grid>
                            <Grid>
                                <Button type="submit" disabled={isSubmitting}>
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