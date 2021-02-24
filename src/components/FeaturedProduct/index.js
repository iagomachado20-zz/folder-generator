import React from 'react';
import { Text, Rect, Image, Group, Circle } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';

const FeaturedProduct = ({  text, image, price, type, onDelete, visibleClose }) => {

    const [productImage] = useImage(image, 'Anonymous');

    return (
        <React.Fragment>

            { visibleClose && (
                <Group zIndex={2} onClick={() => onDelete()}>

                    <Text 
                        text="X"
                        zIndex={1}
                        fill="white" 
                        x={CONFIGS_FOLDER.featuredProduct.size - 20}
                        y={-5}/>
                    <Circle
                        x={CONFIGS_FOLDER.featuredProduct.size - 15}
                        y={0}
                        zIndex={4}
                        width={30}
                        height={30} 
                        fill="red" ></Circle>
                </Group>  
            )}


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
                height={CONFIGS_FOLDER.featuredProduct.height}
                fill="#e5e202"
            />
            {/* Descrição */}
            <Text 
                width={CONFIGS_FOLDER.featuredProduct.size}
                y={10}
                align="center"
                x={0}
                lineHeight={1.5}
                fontFamily="'Montserrat', sans-serif"
                fill="black"
                text={text} fontSize={16}/>
            {/* Imagem */}    
            <Image zIndex={1} y={40} image={productImage} x={50}  left={50} 
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
                y={CONFIGS_FOLDER.featuredProduct.height - 25} 
                x={5} text="IMBATÍVEL"/> 

            {/* Preço */}
            <Group>

                <PriceNumber price={price} type={type}/>
                   
                <Rect
                    x={CONFIGS_FOLDER.featuredProduct.size - 110}
                    cornerRadius={10}
                    y={CONFIGS_FOLDER.featuredProduct.height - 50}
                    zIndex={0}
                    shadowColor="#a00d0d"
                    shadowBlur={1}
                    shadowOpacity={1}
                    shadowOffsetX={-5}
                    shadowOffsetY={2}
                    width={110}
                    height={45}
                    fill="red"
                /> 
            </Group>       
        </React.Fragment>
    )
};  

export default FeaturedProduct;

