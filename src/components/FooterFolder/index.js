import React from 'react';
import FooterImage from '../../assets/rodape.png';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { CONFIGS_FOLDER } from '../../config/constants';

const FooterFolder = () => {

    const [imageFooter] = useImage(FooterImage, 'Anonymous');

    return (
        <Image 
            zIndex={1}
            x={0}
            y={0}
            image={imageFooter} 
            width={CONFIGS_FOLDER.size}
            height={CONFIGS_FOLDER.height_bottom} />    
    )
};  

export default FooterFolder;

