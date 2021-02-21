import React from 'react';
import { CONFIGS_FOLDER } from '../../config/constants';
import { Text } from 'react-konva';

const PriceNumber = ({ price }) => {

    const priceFormated = price.toString().split('.');

    return (
        <React.Fragment>
            <Text
                fontSize={62}
                zIndex={25}
                fill="yellow"
                stroke="red"
                width={110}
                strokeWidth={3}
                letterSpacing={-2}
                align="right"
                y={CONFIGS_FOLDER.featuredProduct.size - 55} 
                fontFamily="'Sigmar One', cursive"
                x={CONFIGS_FOLDER.featuredProduct.size - 170} text={priceFormated[0]}/>
            <Text
                fontSize={35}
                zIndex={25}
                fill="yellow"
                stroke="red"
                letterSpacing={-2}
                width={110}
                strokeWidth={3}
                align="right"
                y={CONFIGS_FOLDER.featuredProduct.size - 45} 
                fontFamily="'Sigmar One', cursive"
                x={CONFIGS_FOLDER.featuredProduct.size - 110} text={',' + priceFormated[1]}/>      
        </React.Fragment>
    )
};  

export default PriceNumber;