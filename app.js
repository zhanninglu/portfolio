const square = document.querySelector('.intro-title');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));

const square1 = document.querySelector('.intro-text');
square1.classList.remove('square-transition');

// Create the observer, same as before:
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square1.classList.add('square-transition');
      return;
    }

    square1.classList.remove('square-transition');
  });
});

observer1.observe(document.querySelector('.square-wrapper1'));

const square2 = document.querySelector('.card');
square2.classList.remove('square-transition');

// Create the observer, same as before:
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square2.classList.add('square-transition');
      return;
    }

    square2.classList.remove('square-transition');
  });
});

observer2.observe(document.querySelector('.square-wrapper2'));


const square3 = document.querySelector('.card2');
square3.classList.remove('square-transition');

// Create the observer, same as before:
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square3.classList.add('square-transition');
      return;
    }

    square3.classList.remove('square-transition');
  });
});

observer3.observe(document.querySelector('.square-wrapper3'));

const square4 = document.querySelector('.card3');
square3.classList.remove('square-transition');

// Create the observer, same as before:
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square4.classList.add('square-transition');
      return;
    }

    square4.classList.remove('square-transition');
  });
});

observer4.observe(document.querySelector('.square-wrapper4'));

const square5 = document.querySelector('.card4');
square5.classList.remove('square-transition');

// Create the observer, same as before:
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square5.classList.add('square-transition');
      return;
    }

    square5.classList.remove('square-transition');
  });
});

observer5.observe(document.querySelector('.square-wrapper5'));



const square6 = document.querySelector('.sp');
square6.classList.remove('square-transition');

// Create the observer, same as before:
const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square6.classList.add('square-transition');
      return;
    }

    square6.classList.remove('square-transition');
  });
});

observer6.observe(document.querySelector('.main'));

const square7 = document.querySelector('.comment');
square7.classList.remove('square-transition');

// Create the observer, same as before:
const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        square7.classList.add('square-transition');
      return;
    }

    square7.classList.remove('square-transition');
  });
});

observer7.observe(document.querySelector('.main'));