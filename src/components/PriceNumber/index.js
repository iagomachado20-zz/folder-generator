import React from 'react';
import { CONFIGS_FOLDER } from '../../config/constants';
import { Group, Text } from 'react-konva';
import { calcPositionPriceByLengthChars } from '../../helpers/positions_elements';

const PriceNumber = ({ textColor = '#ffffff', price, color = 'yellow', stroke='red', type }) => {

    const priceFormated = price.toString().split('.');

    return (
        <React.Fragment>
            <Group>
                <Text
                    fontSize={10}
                    width={20}
                    fill={textColor}
                    align="left"
                    fontFamily="'Montserrat', sans-serif"
                    y={CONFIGS_FOLDER.featuredProduct.height - 20} 
                    x={calcPositionPriceByLengthChars(price).sufix} text="R$"/>
                <Text
                    fontSize={62}
                    fill={color}
                    stroke={stroke}
                    width={calcPositionPriceByLengthChars(price).firstDigit + 50}
                    strokeWidth={3}
                    letterSpacing={-2}
                    fontStyle="bold"
                    align="left"
                    y={CONFIGS_FOLDER.featuredProduct.size - 85} 
                    fontFamily="'Alfa Slab One', cursive"
                    x={calcPositionPriceByLengthChars(price).firstDigit} text={priceFormated[0]}/>
                <Text
                    fontSize={30}
                    fill={color}
                    stroke={stroke}
                    letterSpacing={-2}
                    width={90}
                    strokeWidth={0.2}
                    fontStyle="bold"
                    align="left"
                    y={CONFIGS_FOLDER.featuredProduct.size - 78} 
                    fontFamily="'Alfa Slab One', cursive"
                    x={195} text={',' + priceFormated[1]}/> 
                <Text
                    fontSize={10}
                    width={50}
                    align="right"
                    fontStyle="bold"
                    fontFamily="'Montserrat', sans-serif"
                    fill={color === 'red' ? 'black' : 'white'}
                    y={CONFIGS_FOLDER.featuredProduct.size - 50} 
                    x={CONFIGS_FOLDER.featuredProduct.size - 60} text={type}/> 
            </Group>             
        </React.Fragment>
    )
};  

export default PriceNumber;