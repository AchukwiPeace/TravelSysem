// Booking functionality
document.getElementById('bookBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    
    // Construct booking details
    const bookingDetails = `Name: ${name}<br>Email: ${email}<br>Date: ${date}`;
    
    // Display booking result
    document.getElementById('bookingResult').innerHTML = `
        <h2>Booking Successful!</h2>
        <p>${bookingDetails}</p>
    `;
});

// Simulated luggage database
const luggageDatabase = {
    'ABC123': { owner: 'Gerald', status: 'In Transit' },
    'HJK456': { owner: 'Maxwell', status: 'In Transit' },
    'DEF678': { owner: 'Jane Smith', status: 'Delivered' },
    'LMN891': { owner: 'Maxwell', status: 'Delivered' },
    'GHI789': { owner: 'Bob Johnson', status: 'Lost' }
};

// Luggage tracking functionality
document.getElementById('trackLuggage').addEventListener('click', function() {
    const matricule = document.getElementById('matriculeNumber').value;
    const result = document.getElementById('trackingResult');

    // Check if the luggage exists in the database
    if (luggageDatabase[matricule]) {
        const luggage = luggageDatabase[matricule];
        result.innerHTML = `Luggage belonging to ${luggage.owner} is currently ${luggage.status}.`;
    } else {
        result.innerHTML = 'Luggage not found. Please check the matricule number.';
    }
});

// Complaint dialog functionality
const dialog = document.getElementById('complaintDialog');
const reportBtn = document.getElementById('reportMissingLuggage');
const closeBtn = document.getElementsByClassName('close-button')[0];

// Open the complaint dialog
reportBtn.onclick = function() {
    dialog.style.display = 'block';
};

// Close the complaint dialog
closeBtn.onclick = function() {
    dialog.style.display = 'none';
};

// Close the dialog if clicking outside of it
window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.style.display = 'none';
    }
};

// Handle complaint form submission
document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('complaintName').value;
    const email = document.getElementById('complaintEmail').value;
    const matricule = document.getElementById('matricule').value;
    const description = document.getElementById('description').value;

    // Log the complaint data (for demonstration purposes, this could be sent to a server)
    console.log('Complaint submitted:', { name, email, matricule, description });

    // Notify the user
    alert('Your complaint has been submitted. We will contact you soon.');

    // Close the dialog
    dialog.style.display = 'none';
});