// Initialize EmailJS with your public key
emailjs.init("mfli79y_OVSnPYv1");

// Handle form submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_jvlp6np", "template_als2q2c", this)
    .then(() => {
      alert("Messaggio inviato con successo!");
      form.reset();
    })
    .catch((error) => {
      console.error("Errore nell'invio:", error);
      alert("Errore durante l'invio. Riprova più tardi.");
    });
});
