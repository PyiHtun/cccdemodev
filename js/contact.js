// Initialize EmailJS with your User ID
emailjs.init(atob("Z0RBSUg1OTB6VGt1QjFhYXA="));

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    // Add submit event listener
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Execute reCAPTCHA v3
        grecaptcha.ready(function () {
            grecaptcha.execute("6Ld2JosqAAAAANG1NxQ8s7t8ZiUyoHIhvUTpEFj_", { action: "submit" }).then(function (token) {
                // Append reCAPTCHA token to the form
                const formData = new FormData(contactForm);
                formData.append("g-recaptcha-response", token);

                // Send the form data using EmailJS
                emailjs.sendForm("service_cozycornercare", "template_nrs1e2v", formData)
                    .then(function () {
                        alert("Message sent successfully!");
                        contactForm.reset(); // Reset the form after successful submission
                    }, function (error) {
                        alert("Failed to send the message. Please try again.");
                        console.error("EmailJS Error:", error);
                    });
            });
        });
    });
});
