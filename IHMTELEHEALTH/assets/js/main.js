// Contact form: until a real endpoint is set in the form's `action`,
// stop the submit so the page doesn't reload and show a clear notice.
document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    if (form.getAttribute('action')) return;
    event.preventDefault();
    const status = form.querySelector('.form__status');
    if (status) {
      status.textContent = 'Preview only: this form is not connected yet. Please text 407-216-6388 or email info@ihmtelehealth.com.';
    }
  });
});
