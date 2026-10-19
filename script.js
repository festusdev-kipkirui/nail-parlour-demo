
// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close the menu after selecting a link on mobile.
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});


// =====================================

// =====================================
// 2. WHATSAPP BOOKING SYSTEM
// =====================================

// Replace this placeholder with the salon's real
// WhatsApp number once the owner confirms it.
// Use country code 254, without + or leading zero.
const salonWhatsAppNumber = "REPLACE_WITH_SALON_NUMBER";

const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");
const bookingDate = document.getElementById("booking-date");

// Prevent customers from selecting a date in the past.
const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

bookingDate.min = localToday;

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName =
        document.getElementById("customer-name").value.trim();

    const customerPhone =
        document.getElementById("customer-phone").value.trim();

    const selectedService =
        document.getElementById("service-choice").value;

    const selectedDate = bookingDate.value;

    const selectedTime =
        document.getElementById("booking-time").value;

    if (
        !customerName ||
        !customerPhone ||
        !selectedService ||
        !selectedDate ||
        !selectedTime
    ) {
        formMessage.textContent =
            "Please complete all fields before continuing.";
        return;
    }

    // Check that the preferred date is not in the past.
    if (selectedDate < localToday) {
        formMessage.textContent =
            "Please choose today or a future date.";
        return;
    }

    // Don't open WhatsApp until the real number is configured.
    if (!/^\d{10,15}$/.test(salonWhatsAppNumber)) {
        formMessage.textContent =
            "Demo mode: the salon's WhatsApp number has not been added yet.";
        return;
    }

    const message =
        "Hello! I would like to request a nail appointment.\n\n" +
        "Name: " + customerName + "\n" +
        "My phone: " + customerPhone + "\n" +
        "Service: " + selectedService + "\n" +
        "Preferred date: " + selectedDate + "\n" +
        "Preferred time: " + selectedTime + "\n\n" +
        "Please confirm whether this appointment is available. Thank you!";

    const whatsappURL =
        "https://wa.me/" + salonWhatsAppNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    formMessage.textContent =
        "WhatsApp opened. Please press Send to submit your booking request.";
});


// =====================================
// 3. AUTOMATIC COPYRIGHT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================

const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const customerName =
        document.getElementById("customer-name").value.trim();

    const selectedService =
        document.getElementById("service-choice").value;

    if (!customerName || !selectedService) {
        formMessage.textContent =
            "Please enter your name and choose a service.";
        return;
    }

    formMessage.textContent =
        `Thanks, ${customerName}! Your ${selectedService} enquiry ` +
        "has been prepared in this demo, but has not been sent. " +
        "Please contact the salon directly to arrange an appointment.";
});


// =====================================
// 3. AUTOMATIC COPYRIGHT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();
