import React from 'react';
import { Text, Rect, Image, Group, Circle } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';
import { calcPositionPriceByLengthChars } from '../../helpers/positions_elements';


const ProductCard = ({ textColor="#ffffff", isFeatured, nome, imagem, marca, price, gramatura, unidade, onDelete, visibleClose }) => {

    const [productImage] = useImage(imagem, 'Anonymous');

    return (
        <React.Fragment>

            {   isFeatured && (
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
                )
            }
            
            {/* Imagem */}    
            <Image y={40} width={140} 
                height={150} image={productImage} x={50}  left={50} 
                width={150}/> 
                
            <Rect
                x={CONFIGS_FOLDER.featuredProduct.size - calcPositionPriceByLengthChars(price).box}
                cornerRadius={10}
                y={CONFIGS_FOLDER.featuredProduct.height - 50}
                shadowColor="#a00d0d"
                shadowBlur={1}
                shadowOpacity={1}
                shadowOffsetX={-5}
                shadowOffsetY={2}
                align="right"
                width={calcPositionPriceByLengthChars(price).box}
                height={45}
                fill="red"
            />     
            {/* Descrição */}
            <Text 
                width={CONFIGS_FOLDER.featuredProduct.size}
                y={10}
                align="center"
                x={0}
                lineHeight={1.5}
                fontFamily="'Montserrat', sans-serif"
                fill={textColor}
                text={`${nome} ${marca} ${gramatura}`} fontSize={16}/>
            

                   
            

            {/* Preço */}
            <PriceNumber price={price} type={unidade} textColor={textColor}/>
            {/* Flag */}
            {   isFeatured && (
                    <Text
                    fontSize={15}
                    fill="white"
                    strokeWidth={2}
                    rotation={-30}
                    stroke="red"
                    strokeScaleEnabled
                    fontFamily="'Sigmar One', cursive"
                    y={CONFIGS_FOLDER.featuredProduct.height - 40} 
                    x={0} text="IMBATÍVEL"/> 
                )
            } 

             { visibleClose && (
                <Group onClick={() => onDelete()}>

                    
                    <Circle
                        x={CONFIGS_FOLDER.featuredProduct.size - 15}
                        y={15}
                        width={30}
                        height={30} 
                        fill="red" ></Circle>
                    <Text 
                        text="X"
                        fill="white"
                        x={CONFIGS_FOLDER.featuredProduct.size - 20}
                        y={10}/>    
                </Group>  
            )}      
              
        </React.Fragment>
    )
};  

export default ProductCard;

