function updateTypedStrings() {
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (screenWidth <= 576) {
        typed3.strings = ['<span class="custom-frosh">FROSH</span>', 'Blazing <br> through Infinite Realms'];
      } else {
        typed3.strings = ['<span class="custom-frosh">FROSH</span>', 'Blazing  through Infinite Realms'];
      }

      typed3.reset();
    }

    var typed3 = new Typed('#typed', {
      strings: ['<span class="custom-frosh">FROSH</span>', 'Blazing <br> through infinite ealms'],
      typeSpeed: 30,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      cursorChar: '|',
      showCursor: true,
    });

    updateTypedStrings(); // Call the function once on page load

// Add an event listener to update the strings when the screen is resized
window.addEventListener('resize', function () {
    updateTypedStrings();
});






// window.onload = function() {
//     var video = document.getElementById('myVideo');
//     video.currentTime = 5;
// };


window.onload = function() {
    var video = document.getElementById('myVideo');
    var startTime = 5; 
    var endTime = startTime + 42; 

    // Set the start time
    video.currentTime = startTime;

    // Loop the video when it reaches the end time
    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= endTime) {
            video.currentTime = startTime; // Reset to the start time to loop
        }
    });
};











const navItems = document.querySelectorAll('a');

const toolTips = document.querySelectorAll('.tooltip');

function addToolTip(key) {
  removeTooltips();
  toolTips.forEach((tooltip) => {
    if (tooltip.getAttribute('data-key') == key) {
      tooltip.style.opacity = '1';
    }
  });
}

function removeTooltips() {
  toolTips.forEach((tooltip) => {
    tooltip.style.opacity = '0';
  });
}

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    addToolTip(item.getAttribute('id'));
  });
});

navItems.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    removeTooltips();
  });
});






// (function () {
//     document.querySelector('.sidenav').style.bottom = '-10%';
//     const el = document.querySelector('.sidenav');
//     el.style.top = '-10%';
//     el.style.opacity = '0';
//   })();


// function toggleMenu() {
//     const el = document.querySelector('.sidenav');
//     if (el.style.top == '-10%') {
//       el.style.top = '80%';
//       el.style.opacity = '1';
//       document.querySelector('.toggle__menu-open').style.opacity = '0';
//       document.querySelector('.toggle__menu-close').style.opacity = '1';
//     } else {
//       el.style.top = '-10%';
//       el.style.opacity = '0';
//       document.querySelector('.toggle__menu-open').style.opacity = '1';
//       document.querySelector('.toggle__menu-close').style.opacity = '0';
//     }
//   }


//   function addActiveClass(context) {
//     const navItems = document.querySelectorAll('a');
//     const navItem = document.getElementById(context);
//     navItems.forEach((nav) => {
//       nav.classList.remove('nav-active');
//     });
//     navItem.classList.add('nav-active');
//   }
  

function toggleMenu() {
    const el = document.querySelector('.sidenav');
    if (window.innerWidth < 576) {
      if (el.style.top == '100%') {
        el.style.top = null;
        el.style.bottom = '0.1rem';
        el.style.opacity = '1';
        document.querySelector('.toggle__menu-open').style.opacity = '0';
        document.querySelector('.toggle__menu-close').style.opacity = '1';
      } else {
        el.style.top = '100%';
        el.style.opacity = '0';
        document.querySelector('.toggle__menu-open').style.opacity = '1';
        document.querySelector('.toggle__menu-close').style.opacity = '0';
      }
    }
  }
  
  // Initially hide the sidenav when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.sidenav');
    if (window.innerWidth < 576) {
      el.style.top = '100%';
    //   el.style.top = '-10%';
      el.style.opacity = '0';
    }
  });
  
  // Add a window resize event listener to hide the sidenav when the screen size changes to larger than 576px
  window.addEventListener('resize', function() {
    const el = document.querySelector('.sidenav');
    if (window.innerWidth <= 576) {
      el.style.bottom = '100%';
    //   el.style.top = '-10%';
      el.style.opacity = '0';
      document.querySelector('.toggle__menu-open').style.opacity = '1';
      document.querySelector('.toggle__menu-close').style.opacity = '0';
    }
    else  {
        // el.style.bottom = '-60%';
        el.style.top = '20%';
        el.style.opacity = '1';
        // document.querySelector('.toggle__menu-open').style.opacity = '1';
        // document.querySelector('.toggle__menu-close').style.opacity = '0';
      }
  });
  