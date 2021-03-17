import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AutoComplete, Menu, SidebarProducts } from '../../components';
import api, { BASE_SERVER } from '../../config/api';
import { Container, Row, Grid } from '../../styles/components';

import { Form, Button } from 'react-bootstrap';

import { ACTIONS } from '../../redux/reducers/folder';

function GeneratorLink({ properties_folder, dispatch }) {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        
        api.get('/product/get-products').then(response => {

            let products = response.data.body; 

            products = products.map(product => {

                product.imagem = BASE_SERVER + product.imagem;

                return product;

            });

            dispatch({
                type: ACTIONS.SET_PRODUCTS,
                payload: products
            });

        }, error => {

            console.log('Error ao carregar lista de produtos');

        });

    }, []);

    const handleProductSelected = (product) => {
        
    };

    return (
        <React.Fragment>
            <Menu/>
            <Container style={{ maxWidth: '800px'}}>
                <header className="heading">
                    <Row>
                        <Grid size={6}>
                            <h1>Gerador de Link</h1>
                        </Grid>
                    </Row>
                </header>
                
                <Row>
                    <Grid size={12}>
                        <AutoComplete 
                            products={properties_folder.products} 
                            onSelectedItem={(item) => handleProductSelected(item)}/>
                    </Grid>
                    <Grid size={12}>
                        <Form.Group controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Insira o nome do cliente" />
                        </Form.Group>
                    </Grid>
                    <Grid size={12}>
                        <Form.Group controlId="formName">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Insira o endereço de envio" />
                        </Form.Group>
                    </Grid>
                    <Grid size={12}>
                        <Form.Group controlId="formName">
                            <Form.Label>Forma de Pagamento</Form.Label>
                            <Form.Control type="text" placeholder="Insira a forma que será pago" />
                        </Form.Group>
                    </Grid>
                    <Grid size={12} style={{marginTop: 25}}>
                        <Button variant="success" block>
                            <span className="material-icons">link</span>
                            Gerar Link Whatsapp
                        </Button>
                    </Grid>
                </Row>
               <SidebarProducts/>     
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  connect(mapStateToProps)(GeneratorLink);