export const isQueueNameValid = (qname) => qname.match('^[A-Za-z0-9-]*$'); // Only letters, numbers and - allowed

export const getSentenceCaseText = (txt) =>
  txt?.charAt(0)?.toUpperCase() + txt?.substr(1)?.toLowerCase();

export const isJoinPageUrl = (url) => url.match('/j/[A-Za-z0-9-]*$');
