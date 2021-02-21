import React, { useRef, useState } from 'react';
import { Group, Layer, Stage } from 'react-konva';
import { BackgroundFolder, FeaturedProduct, LogoFolder, ProductCard, TitleFolder } from '../../components';
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

function FolderCreatorPage() {

    const [ featureds, setFeatured ] = useState(FEATUREDS_PRODUCTS);
    const [ products, setProducts ] = useState(PRODUCTS);
    const stageRef = useRef(null);


    const handleExport = () => {
        const uri = stageRef.current.toDataURL();
        // we also can save uri as file
        // but in the demo on Konva website it will not work
        // because of iframe restrictions
        // but feel free to use it in your apps:
        downloadURI(uri, 'folder-exportado.png');
    };


    return (
        <Container>
            <header className="heading">
                <h1>Gerador de Folder</h1>
                <p>Selecione os produtos que deseja inserir no folder</p>
            </header>
            
            <Stage width={CONFIGS_FOLDER.size} height={CONFIGS_FOLDER.size} ref={stageRef}>
                <Layer zIndex={0}>
                    <BackgroundFolder/>
                </Layer>
                <Layer x={0} y={0} zIndex={1}>
                    <Group x={0} y={0}>
                        <LogoFolder/>
                        <TitleFolder/>
                    </Group>
                    
                    {/* Destaques */}
                    { featureds.map((featured, index) => 
                            <Group key={index} x={calcPositionFeaturedsCard(index)} y={CONFIGS_FOLDER.position_initial_products.y}>
                                <FeaturedProduct {...featured} />
                            </Group>
                        )
                    }
                    { products.map((product, index) => 
                        <Group key={index} x={calcPositionProducts(index).x} y={calcPositionProducts(index).y}>
                            <ProductCard {...product} />
                        </Group>
                    )   
                    }
                </Layer>
                
                
            </Stage>
            <button onClick={() => handleExport()}>Exportar</button>
        </Container>
    )
}

export default FolderCreatorPage;