import React from 'react';
import { Layer, Stage, Text } from 'react-konva';
import { BackgroundFolder, FeaturedProduct } from '../../components';
import { CONFIGS_FOLDER } from '../../config/constants';
import { Container } from '../../styles/components';

const FEATUREDS_PRODUCTS = [
    {
        image: 'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_960_720.png',
        text: 'Maçã',
        price: 10.99,
        type: 'KG'
    },
    {
        image: 'https://trimais.vteximg.com.br/arquivos/ids/1003103-1000-1000/foto_original.jpg?v=637395796285270000',
        text: 'Maçã',
        price: 4.99,
        type: 'KG'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_960_720.png',
        text: 'Vodka',
        price: 4.99,
        type: 'CADA'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_960_720.png',
        text: 'Maçã',
        price: 4.99,
        type: 'CADA'
    }
];

function FolderCreatorPage() {

    const [ featureds, setFeatureds ] = [FEATUREDS_PRODUCTS];

    const calcPositionFeaturedsCard = (index) => {

        const { gap, size } = CONFIGS_FOLDER.featuredProduct;

        const calc = (size * index) + (gap * index);

        return calc;

    };

    return (
        <Container>
            <Stage width={CONFIGS_FOLDER.size} height={CONFIGS_FOLDER.size}>
                <BackgroundFolder/>
                {/* Destaques */}
                { featureds.map((featured, index) => 
                    <Layer key={index} x={calcPositionFeaturedsCard(index)} y={CONFIGS_FOLDER.position_initial_products.y}>
                        <FeaturedProduct
                            type={featured.type} 
                            text={featured.text}
                            image={featured.image} 
                            price={featured.price} 
                        />
                    </Layer>
                    )
                }
                
            </Stage>
        </Container>
    )
}

export default FolderCreatorPage;