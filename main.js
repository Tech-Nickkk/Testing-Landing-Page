function navLinksAnimation() {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Set "Home" as active by default
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#hero') {
            link.classList.add('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
}


function initAnimation() {
    const initTl = gsap.timeline();

    initTl.from(".nav-links li", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: .1
    })

    initTl.from(".nav-icon img", {
        yPercent: 10,
        opacity: 0,
        duration: 1
    }, "<+=.5")

    initTl.from(".hero-content-left", {
        yPercent: 5,
        opacity: 0,
        duration: 1
    }, "<+=.5")

    initTl.from(".hero-img", {
        scale: 0,
        opacity: 0,
        duratoin: 1
    }, "<+=.5")

    initTl.from(".hero-content-right .floating-element", {
        opacity: 0,
        duration: 1,
    }, "<+=.5")

    initTl.from(".name-svg .name-path", {
        duration: 3,
        drawSVG: 0,
    }, "<+=.5")
}

function journeySectionAnimation() {
    const journeyTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#journey",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    journeyTl.from(".journey-content h2", {
        opacity: 0,
        y: 20,
        duration: 1
    })
    .from(".journey-content p", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2
    }, "-=0.5")
    .from(".journey-images img", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.3
    }, "-=2");
}

function missionSectionAnimation() {
    gsap.from(".mission-content h2, .mission-content p", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#mission",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".mission-images img", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".mission-images",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

function heritage1SectionAnimation() {
    gsap.from(".heritage-1-container img", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: "#heritage-1",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".heritage-1-content h2, .heritage-1-content p, .heritage-1-content .content-1, .heritage-1-content .content-2", {
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#heritage-1",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

function heritage2SectionAnimation() {
    gsap.from(".heritage-2-content h2, .heritage-2-content p", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#heritage-2",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".heritage-2-images img", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".heritage-2-images",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

function values1SectionAnimation() {
    gsap.from(".values-1-content h2, .values-1-content p", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#values-1",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".values-1-lower-content > div", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".values-1-lower-content",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

function values2SectionAnimation() {
    gsap.from(".values-2-container", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
            trigger: "#values-2",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

function connectSectionAnimation() {
    gsap.from(".connect-content h2, .connect-content p, .connect-content .links svg", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#connect",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".connect-form", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: "#connect",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// Create the ScrollSmoother instance
const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
});

// Add this function to handle navigation link clicks
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('href');
            smoother.scrollTo(target, true); 
        });
    });
}


initAnimation();
navLinksAnimation();
journeySectionAnimation();
missionSectionAnimation();
heritage1SectionAnimation();
heritage2SectionAnimation();
values1SectionAnimation();
values2SectionAnimation();
connectSectionAnimation();
setupNavLinks(); 