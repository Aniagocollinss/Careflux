document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let reason = document.getElementById("reason").value;

    // WhatsApp link
    let whatsappMessage = `Hello, I would like to book an appointment. 
    \nName: ${name} 
    \nPhone: ${phone} 
    \nDate: ${date} 
    \nReason: ${reason}`;
    
    let whatsappUrl = `https://wa.me/2349045598704?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Reset form
    document.getElementById("appointmentForm").reset();
});
