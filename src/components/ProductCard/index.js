import React from 'react';
import { Text, Rect, Image, Group, Circle } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';


const ProductCard = ({  text, image, price, type, onDelete, visibleClose }) => {

    const [productImage] = useImage(image, 'Anonymous');
    return (
        <React.Fragment>


            { visibleClose && (
                <Group onClick={() => onDelete()}>
                    <Circle
                        x={CONFIGS_FOLDER.featuredProduct.size - 15}
                        y={25}
                        width={30}
                        height={30} 
                        fill="red" ></Circle>
                    <Text 
                        text="X"
                        fill="white"
                        x={CONFIGS_FOLDER.featuredProduct.size - 20}
                        y={20}/>
                    
                </Group>  
            )}
            {/* Imagem */}    
            <Image y={50} image={productImage} x={50}  left={50} 
                width={CONFIGS_FOLDER.featuredProduct.image} 
                height={CONFIGS_FOLDER.featuredProduct.image}/>
            <Rect
                x={CONFIGS_FOLDER.featuredProduct.size - 110}
                cornerRadius={10}
                y={CONFIGS_FOLDER.featuredProduct.size - 80}
                width={110}
                height={45}
                fill="#e5e202"
            /> 

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
              
            {/* Preço */}
            <PriceNumber price={price} color="red" stroke="yellow" type={type}/>
        
            
                
        </React.Fragment>
    )
};  

export default ProductCard;

