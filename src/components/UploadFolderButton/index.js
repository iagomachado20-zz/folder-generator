import React from 'react';
import { ContainerBox, InputFile, Box } from './style';

const UploadFolderButton = ({ label, emitterEvent}) => {

    const handleFileBackground = async (event) => {

        const file = Array.from(event.target.files)[0];
        
        if (file) {

            const fileExport = await toBase64(file);
            
            emitterEvent(fileExport);

        }

    };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    return (
        <ContainerBox>
            
            <Box>
                <label>{ label }</label>
                <InputFile type="file" onChange={(e) => handleFileBackground(e)}/>
            </Box>
        </ContainerBox>
    )
};

export default UploadFolderButton;