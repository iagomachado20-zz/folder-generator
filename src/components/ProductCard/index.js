import React from 'react';
import { Text, Rect, Image, Group, Circle } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';


const ProductCard = ({  nome, imagem, marca, price, unidade, onDelete, visibleClose }) => {

    const [productImage] = useImage(imagem);
    
    return (
        <React.Fragment>


            
            {/* Imagem */}    
            <Image y={50} image={productImage} x={50}  left={50} 
                width={140}
                height={140}/>
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
                text={`${nome} ${marca}`} fontSize={16}/>      
              
            {/* Preço */}
            <PriceNumber price={price} color="red" stroke="yellow" type={unidade}/>

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
            
                
        </React.Fragment>
    )
};  

export default ProductCard;

