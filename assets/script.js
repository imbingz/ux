// get the toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0];

// get the navlinks
const navbarLinks = document.getElementsByClassName('nav-links')[0];

// add event listener
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});
