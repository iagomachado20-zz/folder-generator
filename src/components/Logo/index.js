import React from 'react';
import Logo from '../../assets/logo2.png';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { CONFIGS_FOLDER } from '../../config/constants';

const LogoFolder = () => {

    const [imageLogo] = useImage(Logo, 'Anonymous');

    return (
        <Image 
            zIndex={1}
            image={imageLogo} 
            width={CONFIGS_FOLDER.size_logo.width}
            height={CONFIGS_FOLDER.size_logo.height} />    
    )
};  

export default LogoFolder;

