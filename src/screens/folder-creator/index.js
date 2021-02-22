import React, { useRef, useState } from 'react';
import { Group, Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import { BackgroundFolder, FeaturedProduct, FooterFolder, HeaderFolder, LogoFolder, ProductCard, TitleFolder, UploadFolderButton } from '../../components';
import { CONFIGS_FOLDER } from '../../config/constants';
import { calcPositionFeaturedsCard, calcPositionProducts } from '../../helpers/positions_elements';
import { Container } from '../../styles/components';

const FEATUREDS_PRODUCTS = [
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    }
];


const PRODUCTS = [
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
];

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

function FolderCreatorPage({ properties_folder, dispatch }) {


    const [ featureds, setFeatured ] = useState([]);
    const [ products, setProducts ] = useState(properties_folder.products);
    const [ backgroundImage, setBackgroundImage ] = useState(null);
    const [ headerImage, setHeaderImage ] = useState(null);
    const [ footerImage, setFooterImage ] = useState(null);
    const stageRef = useRef(null);
    const inputBackgroundRef = useRef(null);


    const handleExport = () => {
        const uri = stageRef.current.toDataURL();
        downloadURI(uri, 'folder-exportado.png');
    };

    const isStageVisible = () => {
        return backgroundImage;
    };

    return (
        <Container>
            <header className="heading">
                <h1>Gerador de Folder</h1>
                <p>Selecione os produtos que deseja inserir no folder</p>
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
                                            <FeaturedProduct {...featured} />
                                        </Group>
                                    )
                            ) 
                            }
                            {/* Destaques */}
                            { 
                                products && (
                                    products.map((product, index) => 
                                        <Group key={index} x={calcPositionProducts(index).x} y={calcPositionProducts(index).y}>
                                            <ProductCard {...product} />
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
            
            
            <button onClick={() => handleExport()}>Exportar</button>
        </Container>
    )
}

const mapStateToProps = state => ({
    ...state.reducerFolder
}); 

export default  connect(mapStateToProps)(FolderCreatorPage);