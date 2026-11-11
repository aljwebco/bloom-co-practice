
async function loadWebsiteContent() {
    try {
        // Read the information from content.json
        const response = await fetch("content.json");

        if (!response.ok) {
            throw new Error("Could not load website content.");
        }

        const data = await response.json();

        // Update business information
        document.getElementById("businessName").textContent =
            data.businessName;

        document.getElementById("heroTitle").textContent =
            data.heroTitle;

        document.getElementById("heroDescription").textContent =
            data.heroDescription;

        document.getElementById("aboutText").textContent =
            data.aboutText;

        // Update services
        const servicesList =
            document.getElementById("servicesList");

        servicesList.replaceChildren();

        data.services.forEach(function(service) {
            const paragraph = document.createElement("p");
            paragraph.textContent = service;
            servicesList.appendChild(paragraph);
        });

        // Update contact information
        document.getElementById("email").textContent =
            "Email: " + data.email;

        document.getElementById("phone").textContent =
            "Phone: " + data.phone;

        document.getElementById("hours").textContent =
            data.hours;

    } catch (error) {
        console.error("Error loading website content:", error);
    }
}

// Run when the page loads
loadWebsiteContent();
