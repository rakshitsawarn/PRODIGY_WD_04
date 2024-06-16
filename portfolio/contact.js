document.getElementById('contactMail').addEventListener('click', function () {
    
    var emailAddress = 'rakshitsawarn@gmail.com';
    var subject = 'Regarding your portfolio'; 
    var body = 'Hello Rakshit, I have an offer for you. Are you intrested? Let"s Catchup!'; 
    
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});


document.getElementById('contactLinkedIn').addEventListener('click', function () {
    
    var linkedinProfile = 'https://www.linkedin.com/in/rakshit-sawarn-039410250/';
    
    window.open(linkedinProfile, '_blank');
});

document.getElementById('contactCall').addEventListener('click', function () {
    
    var phoneNumber = '+91 7479687456';
    var telLink = 'tel:' + phoneNumber;
    
    window.location.href = telLink;
});
