import React from 'react';
import { Text, Rect, Image, Group, Circle } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';


const ProductCard = ({  text, image, price, type, onDelete, visibleClose }) => {

    const [productImage] = useImage(image, 'Anonymous');
    return (
        <React.Fragment>


        {
            visibleClose && (
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
                        zIndex={0}
                        width={30}
                        height={30} 
                        fill="red" ></Circle>
                </Group>  
            )
        }
        

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
            <Image zIndex={0} y={50} image={productImage} x={50}  left={50} 
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
                zIndex={1}
                fill="#e5e202"
            /> 
                
        </React.Fragment>
    )
};  

export default ProductCard;

