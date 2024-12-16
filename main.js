var form = document.getElementById('resume-form');
var resumeDisplyElement = document.getElementById('resume-display');
var shareableLinkContaner = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n  <h2>Shareable Resume</h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b><span contenteditable=\"ture\">".concat(name, "</span></p>\n  <p><b>Email:</b><span contenteditable=\"ture\">").concat(email, "</span></p>\n  <p><b>Phone:</b><span contenteditable=\"ture\">").concat(phone, "</span></p>\n\n  <h3>Education</h3>\n<P contenteditable=\"ture\">").concat(education, "</p>\n  <h3>Experience</h3>\n<P contenteditable=\"ture\">").concat(experience, "</p>\n  <h3>Skills</h3>\n  <P contenteditable=\"ture\">").concat(skills, "</p>\n  ");
    resumeDisplyElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?usernme=").concat(encodeURIComponent(username));
    shareableLinkContaner.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
