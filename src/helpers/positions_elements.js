import { CONFIGS_FOLDER } from "../config/constants";

const sizes_price_default = {
    box: 100,
    sufix: 110,
    firstDigit: 150
};

export const calcPositionProducts = (index) => {

    const { gap, size } = CONFIGS_FOLDER.featuredProduct;
    const columns = 4;


    let calc = {
        x: 0,
        y: CONFIGS_FOLDER.products_position.y
    };

    if (index < 4) {
        calc = {
            x:  (size * index) + (gap * index),
            y: CONFIGS_FOLDER.products_position.y
        }
    } else {

        calc = {
            x:  (size * (index - columns)) + (gap * index) - 90,
            y: CONFIGS_FOLDER.products_position.y * 2 - size + 10
        }
    }

    return calc;

};

export const calcPositionFeaturedsCard = (index) => {

    const { gap, size } = CONFIGS_FOLDER.featuredProduct;

    return (size * index) + (gap * index);

};


export const calcPositionPriceByLengthChars = (price) => {

    const priceLength = price.length;

    if (priceLength === 5) {
        return {
            box: sizes_price_default.box + 35,
            sufix: sizes_price_default.sufix - 30,
            firstDigit: sizes_price_default.firstDigit - 40
        }
    } else if (priceLength > 5) {
        return {
            box: sizes_price_default.box + 80,
            sufix: sizes_price_default.sufix - 80,
            firstDigit: sizes_price_default.firstDigit - 80
        }
    }

    return sizes_price_default;
    

};