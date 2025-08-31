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

            case "Hiring & Staffing Support":
                return "/hrmanagement/hiring-staff";  
            case "Talent Supply & Managed Services":
                return "/hrmanagement/talent-supply";
            case "Payroll Support & Compliance":
                return "/hrmanagement/payroll-support";
            case "HR Operation Management":
                return "/services/hrmanagement/hr-operation-management";
            case "Employee Training Coordination":
                return "/services/hrmanagement/employee-training-coordination";

            case "Business Process Optimization":
                return "/services/bpo";
            case "Enterprise Risk & Continuity Strategy":
                return "/services/enterprise";
            case "Virtual CFO Services":
                return "/services/virtual";
            case "Startup Advisory & Growth Strategies":
                return "/services/startup";
            case "Financial Restructuring":
                return "/services/financial";

            case "Sole Proprietorship Registration":
                return "/services/sole-proprietorship";
            case "One Person Company (OPC) Registration":
                return "/services/one-person-company";
            case "Private Limited Company Registration":
                return "/services/private-limited-company";
            case "Limited Liability Partnership (LLP) Registration":
                return "/services/limited-liability-partnership";
            case "Partnership Firm Registration":
                return "/services/partnership";

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
