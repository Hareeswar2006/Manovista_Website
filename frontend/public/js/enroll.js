document.addEventListener('DOMContentLoaded', () => {
    const enrollmentHeading = document.getElementById('enrollment-heading');
    const selectedServiceInput = document.getElementById('service');

    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('service');

    if (serviceName) {
        enrollmentHeading.textContent = `Enroll in ${serviceName}`;
        selectedServiceInput.value = serviceName;
    } else {
        enrollmentHeading.textContent = 'Enroll in Our Services';
        selectedServiceInput.value = 'General Inquiry';
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
