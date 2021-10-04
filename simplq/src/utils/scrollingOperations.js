import './scrollingOperation.module.scss';

export const smoothScrollTo = (targetElement) => {
  // offset to avoid the sticky header on top to block the "Create a Queue at the click of a button" text
  const offset = 45;
  // setting the exact position on the document to scroll to
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = targetElement.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;
  // scroll to the exact position

  // console.log ('checking scrollTo', offsetPosition);
  /* window.scrollTo ({
    top: offsetPosition,
    left: '40px',
    behavior: 'smooth',
  }); */
  // $ ('html, body').animate ({scrollTop: $ (hash).offset ().top - 100}, 800);
  window.scrollTo('40px', offsetPosition);
};

export const smoothScrollToHomePageTop = (history) => {
  const element = document.getElementById('target_top');
  if (element) {
    smoothScrollTo(element);
  } else {
    history.push('/');
  }
};

/**
 * Execute a callback as soon as an element is available on the DOM.
 *
 * id - element id to wait on
 * callback - callback to execute as soon as the element becomes available. The
 * element is passed to the callback and it is triggered.
 * */
export const onLoadById = (id, callback) => {
  const checkAndExecute = setInterval(() => {
    const element = document.getElementById(id);
    if (element) {
      callback(element);
      clearInterval(checkAndExecute);
    }
  }, 100);
};
