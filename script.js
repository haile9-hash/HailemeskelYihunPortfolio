document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-list li');
    const sections = document.querySelectorAll('.section');
    let currentSection = 'home';

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');

            document.querySelector('.nav-list li.active')?.classList.remove('active');
            this.classList.add('active');

            document.querySelector(`.section.active`)?.classList.remove('active');
            document.querySelector(`.section.${sectionId}`)?.classList.add('active');

            currentSection = sectionId;
        });
    });

    // Resume Tabs
    const resumeLists = document.querySelectorAll('.resume-list');
    const resumeBoxes = document.querySelectorAll('.resume-box');

    resumeLists.forEach((list, idx) => {
        list.addEventListener('click', () => {
            document.querySelector('.resume-list.active')?.classList.remove('active');
            list.classList.add('active');

            document.querySelector('.resume-box.active')?.classList.remove('active');
            resumeBoxes[idx]?.classList.add('active');
        });
    });

    // Portfolio Tabs
    const portfolioLists = document.querySelectorAll('.portfolio-list');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');

    portfolioLists.forEach((list, idx) => {
        list.addEventListener('click', () => {
            document.querySelector('.portfolio-list.active')?.classList.remove('active');
            list.classList.add('active');

            document.querySelector('.portfolio-box.active')?.classList.remove('active');
            portfolioBoxes[idx]?.classList.add('active');
        });
    });

    // Tooltip functionality
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(el => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.getAttribute('data-tooltip');
        el.appendChild(tooltip);

        el.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        el.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Rotating Roles Animation
    const roles = document.querySelectorAll('.role');
    let currentRole = 0;

    roles[currentRole].style.opacity = '1';
    roles[currentRole].style.transform = 'translateY(0)';

    setInterval(() => {
        roles[currentRole].style.opacity = '0';
        roles[currentRole].style.transform = 'translateY(-100%)';

        currentRole = (currentRole + 1) % roles.length;

        roles[currentRole].style.opacity = '1';
        roles[currentRole].style.transform = 'translateY(0)';

        const nextRole = (currentRole + 1) % roles.length;
        roles[nextRole].style.transform = 'translateY(100%)';
    }, 4000);

    for (let i = 1; i < roles.length; i++) {
        roles[i].style.transform = 'translateY(100%)';
    }

    // Skills Animation
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';

        bar.innerHTML = `<div class="water-fill" style="width:0%"></div>`;
        const waterFill = bar.querySelector('.water-fill');

        setTimeout(() => {
            waterFill.style.width = width + '%';
            waterFill.style.transition = `width 1.5s ease-in-out`;
        }, 100);
    });

    const skillTeamSizes = {
        "JavaScript": 3,
        "React": 4,
        "CSS": 2
    };

    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        const skillName = item.querySelector('.skill-name span')?.textContent;
        const peopleCount = skillTeamSizes[skillName] || 2;

        const peopleContainer = document.createElement('div');
        peopleContainer.className = 'skill-people';

        for (let i = 0; i < peopleCount; i++) {
            const personIcon = document.createElement('i');
            personIcon.className = 'bx bx-user';
            peopleContainer.appendChild(personIcon);
        }

        const peopleLabel = document.createElement('span');
        peopleLabel.textContent = ` ${peopleCount} ${peopleCount === 1 ? 'person' : 'people'} needed`;
        peopleContainer.appendChild(peopleLabel);

        item.querySelector('.skill-info')?.appendChild(peopleContainer);
    });
});
