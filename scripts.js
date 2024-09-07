document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsDetails = document.getElementById('skills-details');
    toggleButton.addEventListener('click', function () {
        if (skillsDetails.classList.contains('hidden')) {
            skillsDetails.classList.remove('hidden');
            toggleButton.textContent = 'Show Less Details';
        }
        else {
            skillsDetails.classList.add('hidden');
            toggleButton.textContent = 'Show More Details';
        }
    });
    // Initialize the skills details as hidden
    skillsDetails.classList.add('hidden');
});
