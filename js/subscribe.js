const scriptURL =
  'https://script.google.com/macros/s/AKfycbwx9XNmdHcbgV81J6vKv5PSCxlDDnM8cra0f8B2BhBAwy6LgmzCsJH-75hIJmHNV-2HSA/exec';
const subForm = document.forms['submit-to-subscribe-sheet'];

subForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = e.currentTarget.elements;
  if (emailValue === '') {
    alert('Please enter a valid email address.');
    return;
  } else {
    fetch(scriptURL, { method: 'POST', body: new FormData(subForm) })
      .then((response) => {
        subForm.reset();
        alert('Success!', response);
      })
      .catch((error) => console.error('Error!', error.message));
  }
});
