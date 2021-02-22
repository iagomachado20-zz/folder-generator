import React from 'react';
import HeaderImage from '../../assets/cabecalho.png';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { CONFIGS_FOLDER } from '../../config/constants';

const HeaderFolder = ({url}) => {

    const [imageLogo] = useImage(url, 'Anonymous');

    return (
        <Image 
            zIndex={1}
            x={0}
            y={0}
            image={imageLogo} 
            width={CONFIGS_FOLDER.size}
            height={CONFIGS_FOLDER.height_top} />    
    )
};  

export default HeaderFolder;

