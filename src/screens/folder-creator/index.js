import React, { useRef, useState, useEffect } from 'react';
import { Group, Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import { AutoComplete, BackgroundFolder, FeaturedProduct, FooterFolder, HeaderFolder, ProductCard, UploadFolderButton } from '../../components';
import { CONFIGS_FOLDER } from '../../config/constants';
import { calcPositionFeaturedsCard, calcPositionProducts } from '../../helpers/positions_elements';
import { Button, Container, ButtonLarge } from '../../styles/components';
import { ContainerForm, Sidebar } from './style';

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
    const featuredCheckRef = useRef(null);
    const [visibleClose, setVisibleClose] = useState(true);

    useEffect(() => {
        
        setProductSelected(null);

        if (productSelected) {
            priceRef.current.value = null;
            featuredCheckRef.current.checked = null;
        }

    }, [products, featureds]);


    const handleExport = () => {

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
        let priceValue = priceRef.current.value;

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

    const deleteItem = (item) => {

        setFeatured((old) => old.filter(oldItem => oldItem.id !== item.id));
        setProducts((old) => old.filter(oldItem => oldItem.id !== item.id));

    };

    return (
        <React.Fragment>
            <Container>
                <header className="heading">
                    <h1>Gerador de Folder</h1>
                    <p>Selecione os produtos que deseja inserir no folder</p>
                    <AutoComplete 
                        products={properties_folder.products} 
                        onSelectedItem={(item) => handleProductSelected(item)}/>
                    {  productSelected && (
                        <ContainerForm>
                            <div className="title">
                                <h4>Complete as informações do produto <strong>{productSelected.text}</strong> </h4>
                            </div>
                            
                            <div className="block">
                                <label>Valor</label>
                                <input type="number" min="1" step="any" ref={priceRef} placeholder="Preço (R$)"/>
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
                

                <div className="actions">
                    <UploadFolderButton
                        emitterEvent={(dataBase64) => setBackgroundImage(dataBase64)} 
                        label="Importar Background" />
                    <UploadFolderButton
                        emitterEvent={(dataBase64) => setHeaderImage(dataBase64)} 
                        label="Importar Cabeçalho" />
                    <UploadFolderButton
                        emitterEvent={(dataBase64) => setFooterImage(dataBase64)} 
                        label="Importar Rodapé" />
                    <ButtonLarge onClick={() => handleExport()}>Exportar Arquivo</ButtonLarge>              
                </div>
                
                {
                    isStageVisible() && (
                        <Stage width={CONFIGS_FOLDER.size} height={CONFIGS_FOLDER.size} ref={stageRef}>
                            <Layer zIndex={0}>
                                <BackgroundFolder url={backgroundImage}/>
                            </Layer>
                            <Layer x={0} y={0} zIndex={1}>
                                <Group x={0} y={0}>
                                    <HeaderFolder  url={headerImage}/>
                                </Group>
                                {
                                    featureds && (
                                        featureds.map((featured, index) => 
                                            <Group key={index} x={calcPositionFeaturedsCard(index)} y={CONFIGS_FOLDER.position_initial_products.y}>
                                                <FeaturedProduct visibleClose={visibleClose} {...featured} onDelete={() => deleteItem(featured)} />
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

            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  connect(mapStateToProps)(FolderCreatorPage);