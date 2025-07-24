import Toast from 'react-native-toast-message';

export const showErrorMessage = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Error!',
    text2: message,
  });
};

export const showSucessMessage = (message: string) => {
    Toast.show({
      type: 'success',
      text1: 'Sucess!',
      text2: message,
    });
  };

  
export const showInfoMessage = (message: string) => {
Toast.show({
    type: 'base',
    text1: 'Information',
    text2: message,
});
};
  
