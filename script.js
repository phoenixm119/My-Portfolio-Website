const revealItems = document.querySelectorAll('[data-reveal]');
    const skillTabs = document.querySelectorAll('.skill-tab');
    let skillsAnimated = false;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const skillSection = document.querySelector('#skills');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !skillsAnimated) {
          skillsAnimated = true;
          skillTabs.forEach((tab, index) => {
            setTimeout(() => {
              tab.classList.add('show');
            }, index * 180);
          });
        }
      });
    }, { threshold: 0.32 });

    if (skillSection) {
      skillObserver.observe(skillSection);
    }