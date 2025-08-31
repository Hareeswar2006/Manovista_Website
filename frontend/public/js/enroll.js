document.addEventListener('DOMContentLoaded', () => {
    const enrollmentHeading = document.getElementById('enrollment-heading');
    const selectedServiceInput = document.getElementById('service');
    const backToServiceLink = document.getElementById('backToServiceLink');

    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('service');

    const getServicePageLink = (name) => {
        switch (name) {
            case "Tax Preparation & Filings":
                return "/services/tax-preparation-filings";
            case "Tax Compliance & Advisory":
                return "/services/tax-compliance-advisory";
            case "Preparation of Financial Statements":
                return "/services/preparation-of-financial-statements";
            case "Professional Bookkeeping Services":
                return "/services/bookkeeping";
            case "Internal & External Audit Support":
                return "/services/internal-external-audit-support";
            default:
                return "/services"; // Fallback to a generic services page
        }
    };

    if (serviceName) {
        enrollmentHeading.innerHTML = `Enroll in <span class="service-name-gradient">${serviceName}</span>`;
        selectedServiceInput.value = serviceName;
        backToServiceLink.href = getServicePageLink(serviceName);
    } else {
        enrollmentHeading.textContent = 'Enroll in Our Services';
        selectedServiceInput.value = 'General Inquiry';
        backToServiceLink.href = "/services"; // Default back link
    }

    const enrollmentForm = document.querySelector('.enrollment-form');
    enrollmentForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(enrollmentForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                enrollmentForm.reset();
            } else {
                alert(`Error: ${result.message || 'Something went wrong.'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your enrollment. Please try again later.');
        }
    });
});
