document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    if (!form) {
        console.error('Form not found');
        return;
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            email: document.getElementById('exampleInputEmail1').value
        };

        // Display the submitted data
        var dataDisplay = document.createElement('div');
        dataDisplay.innerHTML = `
            <h3>Submitted Data:</h3>
            <p>First Name: ${formData.firstName}</p>
            <p>Last Name: ${formData.lastName}</p>
            <p>Phone Number: ${formData.phoneNumber}</p>
            <p>Email: ${formData.email}</p>
        `;
        document.body.appendChild(dataDisplay);

        // Clear the form after submission
        form.reset();
    });
});
