import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { AutoComplete, Menu, SidebarProducts } from '../../components';
import api from '../../config/api';
import { Container, Row, Grid } from '../../styles/components';
import { withRouter } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

import { ACTIONS } from '../../redux/reducers/folder';

const PHONE_SENDER = '5521979880504';

function GeneratorLink({ properties_folder, dispatch, history }) {

    const [productSelected, setProductSelected] = useState(null);
    const quantityRef = useRef();
    const [ productsList, setProductsList ] = useState([]);
    const nomeRef = useRef();
    const enderecoRef = useRef();
    const formaPagamentoRef = useRef();

    useEffect(() => {
        
        api.get('/product/get-products').then(response => {

            let products = response.data.body; 

            dispatch({
                type: ACTIONS.SET_PRODUCTS,
                payload: products
            });

        }, error => {

            console.log('Error ao carregar lista de produtos');

        });

    }, []);

    const handleProductSelected = (product) => {
        setProductSelected(product);
    };

    const updateList = (newlist) => {

        setProductsList(newlist);

    };

    const addProduct = () => {

        const quantidade = quantityRef.current.value;

        if (!quantidade || quantidade === '') {
            alert('Insira uma quantidade válida!');
            return false;
        }

        if (productSelected) {
            const product = {...productSelected, quantidade}
            setProductsList((old) => [...old, product]);
            setProductSelected(null);
        }

        
    };

    const generateTextByProducts = _ => {

        let text = '';

        if (!productsList.length) return text;

        if (productsList.length === 1) {

            const {nome,marca, quantidade, unidade} = productsList[0];

            text = `✅ ${nome} ${marca} | *${quantidade} ${unidade}* \n`;

        } else {
            text = productsList.reduce((prevValue, currentValue) => {

                const textPrev = `✅ ${prevValue.nome} ${prevValue.marca} | *${prevValue.quantidade} ${prevValue.unidade}* \n`;
    
                const textCurrent = `✅ ${currentValue.nome} ${currentValue.marca} | *${currentValue.quantidade} ${currentValue.unidade}* \n`;
    
                return textPrev + textCurrent;
    
            });
        }

        return text;

    };

    const generateTextDataUser = _ => {

        const nome = nomeRef.current.value;
        const endereco = enderecoRef.current.value;
        const forma = formaPagamentoRef.current.value;

        return (
            `DADOS COMPLEMENTARES\n *Cliente:* ${nome} \n *Endereço:* ${endereco} \n *Forma de Pagamento:* ${forma} \n`
        )
    };

    const generateLink = useCallback(() => {

        if  (!formaPagamentoRef.current.value 
            || !nomeRef.current.value 
            || !enderecoRef.current.value
            ) { 
                alert('Você precisa informar todos os dados antes de gerar o link');
                return false;
        };

        let texto = `*Lista de Produtos* \n \n ${generateTextByProducts()} \n ${generateTextDataUser()}`;

        texto = window.encodeURIComponent(texto);

        window.open(`https://api.whatsapp.com/send?phone=${PHONE_SENDER}&text=${texto}`, "_blank");

    }, [productsList]);

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
                    {productSelected && (
                        <Grid size={12}>
                            <Row style={{alignItems: 'center'}}>
                                <Grid size={8}>
                                    <Form.Group controlId="formQuantidade">
                                        <Form.Label>Quantidade</Form.Label>
                                        <Form.Control type="number"
                                            ref={quantityRef} 
                                            placeholder={`Insira a quantidade do produto ${productSelected.nome}`} />
                                    </Form.Group>
                                </Grid>
                                <Grid size={4} style={{marginTop: 25}}>
                                    <Button block onClick={() => addProduct()}>Adicionar</Button>
                                </Grid>
                            </Row>
                        </Grid>
                    )}
                    <Grid size={12}>
                        <Form.Group controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control ref={nomeRef} type="text" placeholder="Insira o nome do cliente" />
                        </Form.Group>
                    </Grid>
                    <Grid size={12}>
                        <Form.Group controlId="formEndereco">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control ref={enderecoRef} type="text" placeholder="Insira o endereço de envio" />
                        </Form.Group>
                    </Grid>
                    <Grid size={12}>
                        <Form.Group controlId="formPagamento">
                            <Form.Label>Forma de Pagamento</Form.Label>
                            <Form.Control ref={formaPagamentoRef} type="text" placeholder="Insira a forma que será pago" />
                        </Form.Group>
                    </Grid>
                    <Grid size={12} style={{marginTop: 25}}>
                        <Button variant="success" block onClick={() => generateLink()}>
                            <span className="material-icons">link</span>
                            Gerar Link Whatsapp
                        </Button>

                        <Button variant="link" block onClick={() => history.goBack()}>
                            <span className="material-icons">arrow_left</span>
                            Voltar
                        </Button>

                    </Grid>
                </Row>
               <SidebarProducts 
                products={productsList} 
                onDelete={(list) => updateList(list)}/>     
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  withRouter(connect(mapStateToProps)(GeneratorLink));