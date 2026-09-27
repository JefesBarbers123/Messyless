// Tiny progressive enhancement: turn placeholder links into a clear setup message.
document.querySelectorAll('a[href^="YOUR_"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('This button is ready to connect. Replace the placeholder link in index.html with your Stripe Payment Link before launch.');
  });
});

const form = document.querySelector('.signup');
if (form && form.action.includes('YOUR_FORMSPREE_ENDPOINT')) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Connect this form to Formspree first by replacing YOUR_FORMSPREE_ENDPOINT in index.html.');
  });
}
