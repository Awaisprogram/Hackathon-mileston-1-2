document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
  const skillsDetails = document.getElementById('skills-details') as HTMLDivElement;

  toggleButton.addEventListener('click', () => {
    if (skillsDetails.classList.contains('hidden')) {
      skillsDetails.classList.remove('hidden');
      toggleButton.textContent = 'Show Less Details';
    } else {
      skillsDetails.classList.add('hidden');
      toggleButton.textContent = 'Show More Details';
    }
  });

  // Initialize the skills details as hidden
  skillsDetails.classList.add('hidden');
});
