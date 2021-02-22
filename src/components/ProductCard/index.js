import React from 'react';
import { Text, Rect, Image, Group } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';

const url = 'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_960_720.png';

const ProductCard = ({  text, image, price, type }) => {

    const [productImage] = useImage(image, 'Anonymous');
    return (
        <React.Fragment>
            {/* Descrição */}
            <Text 
                width={CONFIGS_FOLDER.featuredProduct.size}
                y={10}
                align="center"
                x={0}
                stroke="black"
                lineHeight={1.5}
                strokeWidth={0.4}
                fill="white"
                fontFamily="'Montserrat', sans-serif"
                text={text} fontSize={16}/>      
            {/* Imagem */}    
            <Image zIndex={1} y={50} image={productImage} x={50}  left={50} 
                width={CONFIGS_FOLDER.featuredProduct.image} 
                height={CONFIGS_FOLDER.featuredProduct.image}/>  
            {/* Preço */}
            <PriceNumber price={price} color="red" stroke="yellow" type={type}/>
        
            <Rect
                x={CONFIGS_FOLDER.featuredProduct.size - 110}
                cornerRadius={10}
                y={CONFIGS_FOLDER.featuredProduct.size - 80}
                width={110}
                height={45}
                zIndex={0}
                fill="#e5e202"
            /> 
                
        </React.Fragment>
    )
};  

export default ProductCard;

