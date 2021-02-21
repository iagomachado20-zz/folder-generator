import React from 'react';
import { Text, Rect, Image } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';

const url = 'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_960_720.png';

const FeaturedProduct = ({  text, image, price, type }) => {

    const [productImage] = useImage(image, 'Anonymous');
    return (
        <React.Fragment>
            {/* Background */}
            <Rect
                x={0}
                shadowColor="#c7c50f"
                shadowBlur={1}
                shadowOpacity={1}
                shadowOffsetX={-10}
                shadowOffsetY={5}
                cornerRadius={10}
                y={0}
                width={CONFIGS_FOLDER.featuredProduct.size}
                height={CONFIGS_FOLDER.featuredProduct.size}
                fill="#e5e202"
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
                zIndex={2}
                fill="white"
                strokeWidth={2}
                rotation={-20}
                stroke="red"
                strokeScaleEnabled
                fontFamily="'Sigmar One', cursive"
                y={CONFIGS_FOLDER.featuredProduct.size - 25} 
                x={5} text="IMBATÍVEL"/> 

            {/* Preço */}
            <PriceNumber price={price}/>
            <Text
                fontSize={10}
                zIndex={35}
                width={50}
                align="right"
                fontFamily="'Montserrat', sans-serif"
                fill="white"
                y={CONFIGS_FOLDER.featuredProduct.size - 18} 
                x={CONFIGS_FOLDER.featuredProduct.size - 55} text={type}/>        
            <Rect
                x={CONFIGS_FOLDER.featuredProduct.size - 110}
                cornerRadius={10}
                y={CONFIGS_FOLDER.featuredProduct.size - 50}
                zIndex={10}
                shadowColor="#a00d0d"
                shadowBlur={1}
                shadowOpacity={1}
                shadowOffsetX={-5}
                shadowOffsetY={2}
                width={110}
                height={45}
                fill="red"
            />        
        </React.Fragment>
    )
};  

export default FeaturedProduct;

