import React, { useState } from 'react';
import { Image, Layer } from 'react-konva';
import useImage from 'use-image';
import { CONFIGS_FOLDER } from '../../config/constants';


const BackgroundFolder = ({ url }) => {

    const [image] = useImage(url, 'Anonymous');

    return (
        <Image 
            x={0} 
            left={0} 
            image={image} 
            width={CONFIGS_FOLDER.size}
            height={CONFIGS_FOLDER.size} />
    )
};  

export default BackgroundFolder;

