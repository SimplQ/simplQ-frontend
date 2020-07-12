export const handleEnterPress = (event, keyPresshandler) => {
  if (event.key === 'Enter') {
    keyPresshandler();
  }
};

export const isQNameValid = (qname) => qname.match('^[A-Za-z0-9-]*$'); // Only letters, numbers and - allowed
