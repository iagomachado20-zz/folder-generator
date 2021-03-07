import React, { useRef, useState, useEffect } from 'react';
import { Group, Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import { AutoComplete, BackgroundFolder, FooterFolder, HeaderFolder, LegendFolder, Menu, ModalBox, ProductCard, UploadFolderButton } from '../../components';
import api, { BASE_SERVER } from '../../config/api';
import { CONFIGS_FOLDER } from '../../config/constants';
import { calcPositionFeaturedsCard, calcPositionProducts } from '../../helpers/positions_elements';
import { Container, ButtonLarge, InputField, Row, Grid } from '../../styles/components';
import { ContainerForm } from './style';

import Button from 'react-bootstrap/Button';

import { ACTIONS } from '../../redux/reducers/folder';
import CurrencyInput from 'react-currency-input';

const LIMIT_PRODUCT_BY_FOLDER = 12;

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

function FolderCreatorPage({ properties_folder, dispatch }) {


    const [ featureds, setFeatured ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ backgroundImage, setBackgroundImage ] = useState(null);
    const [ headerImage, setHeaderImage ] = useState(null);
    const [ footerImage, setFooterImage ] = useState(null);
    const stageRef = useRef(null);
    const [ productSelected, setProductSelected ] = useState(null);
    const priceRef = useRef(null);
    const legendRef = useRef(null);
    const featuredCheckRef = useRef(null);
    const [visibleClose, setVisibleClose] = useState(true);
    const [legend, setLegend] = useState('');
    const [showModal, setVisibleModal] = useState(false);

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

    useEffect(() => {
        
        setProductSelected(null);

        if (productSelected) {
            priceRef.current.value = null;
            featuredCheckRef.current.checked = null;
        }

    }, [products, featureds]);


    const handleExport = () => {

        if (!stageRef.current) return false;

        setVisibleClose(false);

        setTimeout(() => {
            
            const uri = stageRef.current.toDataURL();
            downloadURI(uri, 'folder-exportado.png');
            setVisibleClose(true);
        }, 800);
        
    };

    const isStageVisible = () => {
        return backgroundImage;
    };

    const handleProductSelected = (item) => {
        setProductSelected(item);
    };

    const addProduct = () => {

        if (!productSelected) {
            alert('Você precisa selecionar um produto!');
            return false;
        }

        const isFeaturedProduct = featuredCheckRef.current.checked;
        let priceValue = priceRef.current.state.value;

        if (!priceValue) {
            alert('Você precisa informar o preço do produto!');
            return false;
        }

        priceValue = parseFloat(priceValue).toFixed(2);

        const dataProduct = {
            ...productSelected,
            price: priceValue
        };

        if (featureds.length + products.length === LIMIT_PRODUCT_BY_FOLDER) {
            alert(`O limite de produtos por folder são ${LIMIT_PRODUCT_BY_FOLDER}`);
            setProductSelected(null);
            return false;
        }

        if (isFeaturedProduct && featureds.length < 4) {
            setFeatured((old) => [...old, dataProduct]);
        } else {
            setProducts((old) => [...old, dataProduct]);
        }

    };

    const deleteItem = (item, type="product") => {

        if (type === 'featured') {
            setFeatured((old) => old.filter(oldItem => oldItem.id !== item.id));
        } else {
            setProducts((old) => old.filter(oldItem => oldItem.id !== item.id));
        }

    };

    const clearFolder = () => {

        setBackgroundImage(null);
        setHeaderImage(null);
        setFooterImage(null);
        setProductSelected(null);
        setProducts([]);
        setFeatured([]);

    };

    const showPromptModal = () => {
        return (
            <ModalBox 
                title="Deseja criar um novo arquivo?"
                show={showModal}
                onClose={() => setVisibleModal(false)}
                onAccept={() => {
                    setVisibleModal(false);
                    clearFolder();
                }} 
                text="Certifique-se que você já tenha salvo antes de prosseguir."/>
        )
    };

    return (
        <React.Fragment>
            <Menu/>
            <Container>
                <header className="heading">
                    <Row>
                        <Grid size={6}>
                            <h1>Gerador de Folder</h1>
                            <p>Selecione os produtos que deseja inserir no folder</p>
                        </Grid>
                        <Grid size={6}>
                            <div className="actions">
                                <div className="buttons-big">
                                    <ButtonLarge color="secondary" onClick={() => handleExport()}> 
                                        <span className="material-icons">save</span> Exportar Arquivo
                                    </ButtonLarge>
                                    <ButtonLarge onClick={() => setVisibleModal(true)}> 
                                        <span className="material-icons">playlist_add</span> Novo Arquivo
                                    </ButtonLarge>  
                                </div>            
                            </div>
                        </Grid>
                    </Row>
                    
                    <Row style={{display: 'flex', alignItems: 'flex-end'}}>
                        <Grid size={6}>
                            <AutoComplete 
                                products={properties_folder.products} 
                                onSelectedItem={(item) => handleProductSelected(item)}/>
                        </Grid>
                        <Grid size={6}>
                            <div>
                                <UploadFolderButton
                                    emitterEvent={(dataBase64) => setBackgroundImage(dataBase64)} 
                                    label="Background" />
                                <UploadFolderButton
                                    emitterEvent={(dataBase64) => setHeaderImage(dataBase64)} 
                                    label="Cabeçalho" />
                                <UploadFolderButton
                                    emitterEvent={(dataBase64) => setFooterImage(dataBase64)} 
                                    label="Rodapé" />
                            </div>
                            <InputField 
                                ref={legendRef}
                                type="text"
                                onChange={() => setLegend(legendRef.current.value)} 
                                placeholder="Informe a data de legenda"/>
                        </Grid>
                    </Row>
                    
                    {  productSelected && (
                        <ContainerForm>
                            <div className="title">
                            <p>Complete as informações do produto <strong>{productSelected.nome} {productSelected.marca}</strong> </p>
                            </div>
                            
                            <div className="block">
                                <label>Valor</label>
                                <CurrencyInput ref={priceRef} prefix="R$"/>
                            </div>
                            <div className="block">
                                <label>Destaque</label>
                                <input ref={featuredCheckRef} type="checkbox"/>
                            </div>
                            <div className="block">
                                <Button onClick={() => addProduct()}>Adicionar</Button>
                            </div>
                        </ContainerForm>
                        )
                    }
                    
                </header>
                
                
                {
                    isStageVisible() && (
                        <Stage width={CONFIGS_FOLDER.size} height={CONFIGS_FOLDER.size} ref={stageRef}>
                            <Layer>
                                <BackgroundFolder url={backgroundImage}/>
                            </Layer>
                            <Layer x={0} y={0}>
                                <Group x={0} y={0}>
                                    <LegendFolder dataText={legend}/>
                                    <HeaderFolder  url={headerImage}/>
                                </Group>
                                {
                                    featureds && (
                                        featureds.map((featured, index) => 
                                            <Group key={index} x={calcPositionFeaturedsCard(index)} y={CONFIGS_FOLDER.position_initial_products.y}>
                                                <ProductCard textColor="#000000" isFeatured visibleClose={visibleClose} {...featured} onDelete={() => deleteItem(featured, 'featured')} />
                                            </Group>
                                        )
                                    ) 
                                }
                                {/* Destaques */}
                                { 
                                    products && (
                                        products.map((product, index) => 
                                            <Group key={index} x={calcPositionProducts(index).x} y={calcPositionProducts(index).y}>
                                                <ProductCard visibleClose={visibleClose} {...product} onDelete={() => deleteItem(product)}/>
                                            </Group>
                                        )   
                                    )
                                }
                                <Group x={0} y={CONFIGS_FOLDER.size - CONFIGS_FOLDER.height_bottom}>
                                    <FooterFolder url={footerImage}/>
                                </Group>
                            </Layer>
                            
                            
                        </Stage>
                    )
                }
                { showPromptModal() }
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  connect(mapStateToProps)(FolderCreatorPage);