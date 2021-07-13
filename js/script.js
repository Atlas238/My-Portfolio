// Observer for when about me section enters viewport -- add animation class to entire section
const aboutMeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // This block is for our Section header elements
        const aboutMe = entry.target.querySelector('#about-me');

        if (entry.isIntersecting) {
            aboutMe.classList.add('fadeIn-animation');
            return;
        }
    });
});

aboutMeObserver.observe(document.querySelector('.about-me-wrapper'));

const myWorkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // This block is for our Section header elements
        const myWork = entry.target.querySelector('#my-work');

        if (entry.isIntersecting) {
            myWork.classList.add('fadeIn-animation');
            return;
        }
    });
});

myWorkObserver.observe(document.querySelector('.my-work-wrapper'));