import React, { useState } from 'react';
import { Image, Layer } from 'react-konva';
import useImage from 'use-image';
import { CONFIGS_FOLDER } from '../../config/constants';

const url = 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80';

const BackgroundFolder = () => {

    const [image] = useImage(url);

    return (
        <Layer>
            <Image 
                x={0} 
                left={0} 
                image={image} 
                width={CONFIGS_FOLDER.size}
                height={CONFIGS_FOLDER.size} />
        </Layer>
    )
};  

export default BackgroundFolder;

