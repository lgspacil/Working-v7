import { Alert } from 'react-native';

export function validateEmail(email, onNotValid) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(email) === true) {
        if (onNotValid != null)
            onNotValid();
        else
            Alert.alert("Email address is not in a valid format.")
        return false
    }
    return true;
}

export function validatePhoneNumber(number, onNotValid) {
    let reg;
    if(number.split()[0] === "+"){
        reg = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
    }
    else{
        reg = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    }
    if (!reg.test(number) === true) {
        if (onNotValid != null)
            onNotValid();
        else
            Alert.alert("Phone number is not in a valid format.")
        return false
    }
    return true;
}

export function validateZipCode(number, onNotValid) {
    const reg = /^\d{5}$|^\d{5}-\d{4}$/
    if(!reg.test(number) === true) {
        if (onNotValid != null){
            onNotValid();
        }
        else{
            Alert.alert("Zip code is not in a valid format");
        }
        return false
    }
    return true;
}

