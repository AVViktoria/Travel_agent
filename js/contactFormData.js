const scriptURL =
  'https://script.google.com/macros/s/AKfycbzq1TgnCYT5yqzt0sjhDXWCS3Ym4dqMv_w-rj5Yl9kxvh-frIF4J9-9fUGRZhYQhcEKZQ/exec';
const form = document.forms['contact-us'];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // *  check if some input filled if not warning
  const formElements = e.currentTarget.elements;
  const emailValue = formElements.email.value;
  const firstNameValue = formElements.firstName.value;
  const lastNameValue = formElements.lastName.value;
  const messageValue = formElements.message.value;
  const subscribeValue = formElements.subscribe.value;

  if (!subscribeValue) {
    alert('Please enter a valid email address.');
    return;
  }

  if (emailValue === '' || messageValue === '' || firstNameValue === '' || lastNameValue === '') {
    alert('Please ensure all input fields are completed. Thank you!');
    return;
  } else {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        form.reset();
        alert('Success!', response);
      })
      .catch((error) => console.error('Error!', error.message));
  }
});

// if (!firstNameValue) {
//   alert('First name is required.');
//   return;
// }
// if (!lastNameValue) {
//   alert('Last name is required.');
//   return;
// }
// if (emailValue === '') {
//   alert('Please enter a valid email address.');
//   return;
// }
