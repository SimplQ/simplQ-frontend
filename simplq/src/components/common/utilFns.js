export const handleEnterPress = (event, keyPressHandler) => {
  if (event.key === 'Enter') {
    keyPressHandler();
  }
};

export const isQueueNameValid = (qname) => qname.match('^[A-Za-z0-9-]*$'); // Only letters, numbers and - allowed
