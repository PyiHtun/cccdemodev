// Initialize EmailJS with your User ID
emailjs.init(atob("Z0RBSUg1OTB6VGt1QjFhYXA="));
  
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the contact form
    const contactForm = document.getElementById("contact-form");

    // Add submit event listener
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const recaptchaResponse = grecaptcha.getResponse();

        if (!recaptchaResponse) {
          alert("Please complete the reCAPTCHA challenge!");
          return;
       }

      const formData = new FormData(this);
        formData.append("g-recaptcha-response", recaptchaResponse);


        // Send the form data using EmailJS
        emailjs.sendForm("service_cozycornercare", "template_nrs1e2v", this)
            .then(function () {
                alert("Message sent successfully!");
                contactForm.reset(); // Reset the form after successful submission
                grecaptcha.reset(); // Reset the reCAPTCHA widget
              }, function (error) {
                alert("Failed to send the message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});
