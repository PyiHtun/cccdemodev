// Initialize EmailJS with your User ID
emailjs.init(atob("Z0RBSUg1OTB6VGt1QjFhYXA="));

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Send the form data using EmailJS
        emailjs.sendForm("service_cozycornercare", "template_nrs1e2v", contactForm)
            .then(function () {
                alert("Message sent successfully!");
                contactForm.reset(); // Reset the form after successful submission
            }, function (error) {
                alert("Failed to send the message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
}); 