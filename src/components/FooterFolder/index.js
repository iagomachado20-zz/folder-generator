import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { CONFIGS_FOLDER } from '../../config/constants';

const FooterFolder = ({ url }) => {

    const [imageFooter] = useImage(url, 'Anonymous');

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

