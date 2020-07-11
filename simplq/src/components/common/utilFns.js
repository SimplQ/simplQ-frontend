/* eslint-disable import/prefer-default-export */
export const handleEnterPress = (event, keyPresshandler) => {
  if (event.key === 'Enter') {
    keyPresshandler();
  }
};
