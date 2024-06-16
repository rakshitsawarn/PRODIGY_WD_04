
// Function to handle the click event for contacting via mail
document.getElementById('contactMail').addEventListener('click', function () {
    // Replace 'your.email@example.com' with your actual email address
    var emailAddress = 'your.email@example.com';
    var subject = 'Regarding your portfolio'; // Specify a subject for the email
    var body = 'Hello Rakshit, '; // Write your message here
    // Construct the mailto link with the email address, subject, and body
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
});

// Function to handle the click event for contacting via LinkedIn
document.getElementById('contactLinkedIn').addEventListener('click', function () {
    // Replace 'https://www.linkedin.com/in/yourprofile' with your LinkedIn profile URL
    var linkedinProfile = 'https://www.linkedin.com/in/yourprofile';
    // Open the LinkedIn profile in a new tab
    window.open(linkedinProfile, '_blank');
});

// Function to handle the click event for contacting via call
document.getElementById('contactCall').addEventListener('click', function () {
    // Replace '1234567890' with your actual phone number
    var phoneNumber = '1234567890';
    // Construct the tel link with the phone number
    var telLink = 'tel:' + phoneNumber;
    // Open the default phone dialer with the tel link
    window.location.href = telLink;
});
