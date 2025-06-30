// contactform.js 

// Initialize with your EmailJS public key
emailjs.init('mfli79y_OVSnPYv1');

// Handle form submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_jvlp6np', 'template_als2q2c', this)
    .then(() => {
      alert('Messaggio inviato con successo!');
      form.reset();
    })
    .catch((error) => {
      console.error('Errore durante l\'invio:', error);
      alert('Errore durante l\'invio. Riprova più tardi.');
    });
});
