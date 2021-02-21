import React from 'react';
import { CONFIGS_FOLDER } from '../../config/constants';
import { Group, Text } from 'react-konva';

const PriceNumber = ({ price, color = 'yellow', stroke='red', type }) => {

    const priceFormated = price.toString().split('.');

    return (
        <React.Fragment>
            <Group zIndex={2}>
                <Text
                    fontSize={10}
                    width={20}
                    fill="black"
                    align="right"
                    fontFamily="'Montserrat', sans-serif"
                    y={CONFIGS_FOLDER.featuredProduct.size - 25} 
                    x={CONFIGS_FOLDER.featuredProduct.size - 140} text="R$"/>
                <Text
                    fontSize={62}
                    fill={color}
                    stroke={stroke}
                    width={110}
                    strokeWidth={3}
                    letterSpacing={-2}
                    align="right"
                    y={CONFIGS_FOLDER.featuredProduct.size - 55} 
                    fontFamily="'Sigmar One', cursive"
                    x={CONFIGS_FOLDER.featuredProduct.size - 180} text={priceFormated[0]}/>
                <Text
                    fontSize={35}
                    fill={color}
                    stroke={stroke}
                    letterSpacing={-2}
                    width={110}
                    strokeWidth={3}
                    align="right"
                    y={CONFIGS_FOLDER.featuredProduct.size - 45} 
                    fontFamily="'Sigmar One', cursive"
                    x={CONFIGS_FOLDER.featuredProduct.size - 115} text={',' + priceFormated[1]}/> 
                <Text
                    fontSize={10}
                    width={50}
                    align="right"
                    fontFamily="'Montserrat', sans-serif"
                    fill="black"
                    y={CONFIGS_FOLDER.featuredProduct.size - 18} 
                    x={CONFIGS_FOLDER.featuredProduct.size - 60} text={type}/> 
            </Group>             
        </React.Fragment>
    )
};  

export default PriceNumber;