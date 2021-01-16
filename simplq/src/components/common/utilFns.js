export const handleEnterPress = (event, keyPresshandler) => {
  if (event.key === 'Enter') {
    keyPresshandler();
  }
};

export const isQueueNameValid = (qname) => qname.match('^[A-Za-z0-9-]*$'); // Only letters, numbers and - allowed

export const smoothScrollTo = (targetElement) => {
  // offset to avoid the sticky header on top to block the "Create a Queue at the click of a button" text
  const offset = 45;
  // setting the exact position on the document to scroll to
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = targetElement.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;
  // scroll to the exact position
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const smoothScrollToHomePageTop = () => {
  const element = document.getElementById('target_top');
  if (element) {
    smoothScrollTo(element);
  } else {
    window.location.href = '/';
  }
};

export const title = (txt) => txt?.charAt(0)?.toUpperCase() + txt?.substr(1)?.toLowerCase();
