// Observer for when about me section enters viewport -- add animation class to entire section
const aboutMeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // This block is for our Section header elements
        const aboutMe = entry.target.querySelector('#about-me');

        if (entry.isIntersecting) {
            console.log('Im visible!');
            aboutMe.classList.add('fadeIn-animation');
            return;
        }

        // header.classList.remove('fadeIn-animation');
    });
});

aboutMeObserver.observe(document.querySelector('.about-me-wrapper'));