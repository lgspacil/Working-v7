import Device from 'react-native-device-detection';

const family =  Device.isIos ? 'System' : 'sans-serif';

const scaling = Device.isIos && Device.isTablet ? 1.25 : 1.0;

const weights = {
    heavy: '600',
    normal: '300',
    light: '200'
}

export const FontSizes = {
    h1: 27 * scaling,
    h2: 24 * scaling,
    h3: 21 * scaling,
    h4: 18 * scaling,
    h5: 16 * scaling,
    h6: 14 * scaling,
    normal: 12 * scaling,
    tiny: 10 * scaling
}
export const FontStyles = {
    h1: {
        fontSize: FontSizes.h1,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h2: {
        fontSize: FontSizes.h2,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h3: {
        fontSize: FontSizes.h3,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h3Heavy: {
        fontSize: FontSizes.h3,
        fontFamily: family.heavy,
        fontWeight: weights.heavy
    },
    h4: {
        fontSize: FontSizes.h4,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h4Heavy: {
        fontSize: FontSizes.h4,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h5: {
        fontSize: FontSizes.h5,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h6: {
        fontSize: FontSizes.h6,
        fontFamily: family,
        fontWeight: weights.normal
    },
    h6Heavy: {
        fontSize: FontSizes.h6,
        fontFamily: family,
        fontWeight: weights.heavy
    },
    normal: {
        fontSize: FontSizes.normal,
        fontFamily: family,
        fontWeight: weights.normal
    },
    normalHeavy: {
        fontSize: FontSizes.normal,
        fontFamily: family,
        fontWeight: weights.heavy
    },
    tiny: {
        fontSize: FontSizes.tiny,
        fontFamily: family,
        fontWeight: weights.normal
    }

}