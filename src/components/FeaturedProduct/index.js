import React from 'react';
import { Text, Rect, Image, Layer } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';

const url = 'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_960_720.png';

const FeaturedProduct = ({  text, image, price, type }) => {

    const [productImage] = useImage(image, 'Anonymous');

    return (
        <React.Fragment>
            {/* Background */}
            <Rect
                x={0}
                cornerRadius={10}
                y={0}
                width={CONFIGS_FOLDER.featuredProduct.size}
                height={CONFIGS_FOLDER.featuredProduct.size}
                fill="yellow"
            />
            {/* Descrição */}
            <Text 
                width={CONFIGS_FOLDER.featuredProduct.size}
                y={10}
                align="center"
                x={0}
                lineHeight={1.5}
                fill="black"
                text={text} fontSize={16}/>
            {/* Imagem */}    
            <Image zIndex={1} y={60} image={productImage} x={50}  left={50} 
                width={CONFIGS_FOLDER.featuredProduct.image} 
                height={CONFIGS_FOLDER.featuredProduct.image}/> 

            {/* Flag */}        
            <Text
                fontSize={18}
                zIndex={5}
                fill="red"
                strokeWidth={1.2}
                rotation={-20}
                stroke="red"
                strokeScaleEnabled
                y={CONFIGS_FOLDER.featuredProduct.size - 30} 
                x={5} text="IMBATÍVEL"/> 

            {/* Preço */}
            <Text
                fontSize={30}
                zIndex={10}
                fill="yellow"
                stroke="red"
                width={90}
                strokeWidth={1}
                align="right"
                y={CONFIGS_FOLDER.featuredProduct.size - 45} 
                x={CONFIGS_FOLDER.featuredProduct.size - 110} text={price}/> 
            <Text
                fontSize={10}
                zIndex={10}
                width={50}
                align="right"
                fill="white"
                y={CONFIGS_FOLDER.featuredProduct.size - 18} 
                x={CONFIGS_FOLDER.featuredProduct.size - 70} text={type}/>        
            <Rect
                x={CONFIGS_FOLDER.featuredProduct.size - 100}
                cornerRadius={10}
                y={CONFIGS_FOLDER.featuredProduct.size - 62}
                zIndex={10}
                width={100}
                height={60}
                fill="red"
            />        
        </React.Fragment>
    )
};  

export default FeaturedProduct;

