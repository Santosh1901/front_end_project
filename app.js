const timelin = gsap.timeline({ default: { ease: 'power1.out' } });

timelin.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
timelin.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
timelin.to(".intro", { y: "-100%", duration: 1 }, "-=1");
timelin.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
timelin.fromTo(".sec-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
