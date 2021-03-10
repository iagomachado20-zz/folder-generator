import React from 'react';
import { Group, Rect, Text } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';

const LegendFolder = ({ dataText = 'Insira a data' }) => {

    const textFirst = `OFERTAS VÁLIDAS SOMENTE`;
    const textSecond = `OU ENQUANTO DURAR NOSSO ESTOQUE`;

    return (
        <React.Fragment>
            <Group width={CONFIGS_FOLDER.size / 2} height={80}>
                <Rect
                    x={0}
                    shadowColor="#af1e00"
                    shadowBlur={1}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={2}
                    y={0}
                    width={CONFIGS_FOLDER.size / 2.2}
                    height={67}
                    fill="red"
                /> 
                <Text 
                    width={CONFIGS_FOLDER.size / 2} 
                    y={12} fontStyle="bold"
                    fontSize={16} 
                    x={25}
                    verticalAlign="center" 
                    align="left" lineHeight={1.5}
                    fontFamily="'Montserrat', sans-serif" 
                    text={textFirst.toUpperCase()} 
                    fill="#ffffff"
                />
                <Text 
                    width={CONFIGS_FOLDER.size / 2} 
                    y={12} fontStyle="bold"
                    fontSize={16} 
                    x={280}
                    width={240}
                    verticalAlign="center" 
                    align="left" lineHeight={1.5}
                    fontFamily="'Montserrat', sans-serif" 
                    text={dataText.toUpperCase()} 
                    fill="yellow"
                />
                <Text 
                    width={CONFIGS_FOLDER.size / 2} 
                    y={37} fontStyle="bold"
                    fontSize={16} 
                    x={25}
                    width={500}
                    verticalAlign="center" 
                    align="left" lineHeight={1.5}
                    fontFamily="'Montserrat', sans-serif" 
                    text={textSecond.toUpperCase()}
                    fill="#ffffff"
                />
            </Group>
        </React.Fragment>   
    )
};  

export default LegendFolder;

