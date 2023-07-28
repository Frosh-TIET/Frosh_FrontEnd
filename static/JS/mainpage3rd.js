/**
* Template Name: MyPortfolio - v4.8.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * burgerMenu
     */
    const burgerMenu = select('.burger')
    on('click', '.burger', function(e) {
      burgerMenu.classList.toggle('active');
    })
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('#portfolio-grid');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.item',
        });
  
        let portfolioFilters = select('#filters a', true);
  
        on('click', '#filters a', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('active');
          });
          this.classList.add('active');
  
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()


  gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo div .star", {
  opacity: 0,
  delay: 1,
  x: 20,
});

const menu_items = document.querySelector(".menu-items");
gsap.from(menu_items.children, {
  opacity: 0,
  x: 0,
  duration: 1,
  delay: 1.5,
  stagger: {
    amount: 1,
  },
});

gsap.utils.toArray(".title").forEach((title) => {
  gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: "0",
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: title,
    }
  );
});

gsap.utils.toArray("p").forEach((p) => {
  gsap.fromTo(
    p,
    {
      opacity: 0,
      x: 150,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: p,
    }
  );
});

gsap.utils.toArray("button").forEach((button) => {
  gsap.fromTo(
    button,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: button,
    }
  );
});

gsap.from(".pyramid", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5,
});

gsap.fromTo(
  ".star",
  {
    scale: 0,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: ".star",
  }
);

gsap.utils.toArray(".line").forEach((line) => {
  gsap.fromTo(
    line,
    {
      opacity: 0,
      width: "0%",
    },
    {
      opacity: 1,
      width: "100%",
      duration: 1,
      delay: 1,
      scrollTrigger: line,
    }
  );
});

gsap.utils.toArray(".rotation").forEach((rotate) => {
  gsap.fromTo(
    rotate,
    {
      opacity: 0,
      rotation: 350,
      scale: 0.2,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: rotate,
    }
  );
});

gsap.fromTo(
  ".card",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".card",
  }
);

gsap.fromTo(
  ".about-content",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".about-content",
  }
);

gsap.fromTo(
  ".text",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".about-content",
  }
);

const menu = document.querySelector(".menu");

gsap.from(menu.children, {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.5,
  stagger: {
    amount: 1,
  },
  scrollTrigger: {
    trigger: menu.children,
  },
});
