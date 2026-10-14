import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations() {
  // 1. Lenis Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
  });

  // Sync ScrollTrigger with Lenis
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  // Parallax background drift removed! It was causing the entire canvas to shift. Only local particle proximity grabbing remains.

  // 3. Magnetic Buttons
  const magneticWrappers = document.querySelectorAll('.magnetic-wrap');
  magneticWrappers.forEach((wrap) => {
    const child = wrap.children[0];
    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const x = ((relX - centerX) / centerX) * 20;
      const y = ((relY - centerY) / centerY) * 20;

      gsap.to(child, { x: x, y: y, duration: 0.3, ease: 'power2.out' });
    });

    wrap.addEventListener('mouseleave', () => {
      gsap.to(child, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
    });
  });

  // 4. GSAP Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-up');
  revealElements.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Fade out hero scroll-down arrow
  const scrollArrow = document.querySelector('.scroll-down-arrow');
  if (scrollArrow) {
    lenis.on('scroll', ({ scroll }) => {
      const targetOpacity = scroll > 40 ? 0 : 1;
      gsap.to(scrollArrow, {
        opacity: targetOpacity,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  }

  // Hero image effects
  const heroImg = document.querySelector('.hero-img');
  const heroWrapper = document.querySelector('.hero-image-wrapper');

  if (heroImg) {
    const floatTween = gsap.to(heroImg, {
      y: -10,
      scale: 1.03,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    if (heroWrapper) {
      heroWrapper.addEventListener('mousemove', (e) => {
        const rect = heroWrapper.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const xNorm = (relX - centerX) / centerX;
        const yNorm = (relY - centerY) / centerY;

        const maxShift = 15;
        const maxTilt = 10;

        const xOffset = xNorm * maxShift;
        const yOffset = yNorm * maxShift;
        const rotateY = xNorm * maxTilt;
        const rotateX = -yNorm * (maxTilt * 0.6);

        floatTween.pause();

        gsap.to(heroImg, {
          x: xOffset,
          y: yOffset,
          rotationY: rotateY,
          rotationX: rotateX,
          transformPerspective: 800,
          transformOrigin: "center center",
          duration: 0.4,
          ease: "power3.out"
        });
      });

      heroWrapper.addEventListener('mouseleave', () => {
        gsap.to(heroImg, {
          x: 0,
          y: -10,
          rotationY: 0,
          rotationX: 0,
          scale: 1.03,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => floatTween.resume()
        });
      });

      gsap.fromTo(heroWrapper,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroWrapper,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }

  // Define the ticker function so we can remove it on cleanup
  const lenisTicker = (time) => {
    lenis.raf(time * 1000);
  };
  
  gsap.ticker.add(lenisTicker);

  return () => {
    // Cleanup function: Lenis allows destruction to stop the RAF loop
    lenis.destroy();
    gsap.ticker.remove(lenisTicker);
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
