import Toast from "react-native-toast-message";

export const infoToast = (title: string, body: string = '') => {
    Toast.show({
        type: 'info',
        topOffset: 65,
        text1: title,
        text2: body
    });
}

export const successToast = (title: string, body: string = '') => {
    Toast.show({
        type: 'success',
        topOffset: 65,
        text1: title,
        text2: body
    });
}

export const errorToast = (title: string, body: string = '') => {
    Toast.show({
        type: 'error',
        topOffset: 65,
        text1: title,
        text2: body
    });
}