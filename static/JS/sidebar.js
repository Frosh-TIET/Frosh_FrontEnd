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
  // cursorChar: '|',
  // showCursor: true,
});

updateTypedStrings(); // Call the function once on page load

// Add an event listener to update the strings when the screen is resized
window.addEventListener('resize', function () {
updateTypedStrings();
});








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
}else {
  el.style.top = '20%';
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

// document.addEventListener('DOMContentLoaded', function() {
//   const el = document.querySelector('#spacing');
//   var win=window.innerHeight;
//   if (window.innerWidth < 576) {
//     el.style.height = win;
//   //   el.style.top = '-10%';
//     // el.style.opacity = '0';
//   }
//   });




  function changeElementStyle() {
    const getBrowserName = () => {
      let browserInfo = navigator.userAgent;
      let browser;

    const element = document.getElementById('register'); // Replace 'your-element-id' with the ID of the element you want to style
    if (browserInfo.includes('Safari') && window.innerWidth<576 && window.scrollY < 424) {
      element.style.position = 'absolute'; // Change this line to apply the new desired style
      element.style.top = '54%'; // Change this line to apply the new desired style
      element.style.width = '68%';
    }
    else if (window.innerWidth < 576 && window.scrollY >= 424) {
      // Change the style of the element when the user has scrolled one viewport and the width is less than 576px
      element.style.position = 'fixed'; // Change this line to apply the desired style
      element.style.top= '50px'; // Change this line to apply the desired style
      element.style.width="30%";
      // Add more style changes as needed
      element.textContent="Register";
    } else if (window.innerWidth < 576 && window.scrollY < 424) {
      // Apply a different set of styles when the user has scrolled back to the top and the width is less than 576px
      element.style.position = 'absolute'; // Change this line to apply the new desired style
      element.style.top = '53%'; // Change this line to apply the new desired style
      element.style.width = '68%';
      // Add more style changes as needed for the "scrolled back to top" state
      element.textContent="Register for our Event";
    } else {
      // Reset the style when the condition is not met
      element.style.position = 'absolute'; // Reset the background color
      element.style.top = '56%';
      element.style.width='30%';// Reset the text color
      // Reset other styles as needed
    }
  }
  window.addEventListener('DOMContentLoaded', changeElementStyle);
  window.addEventListener('resize', changeElementStyle);


  // Add event listener for the scroll event
  window.addEventListener('scroll', changeElementStyle);


  // Call the function once on page load to check the initial state
  // changeElementStyle();


  // Lock the screen orientation to "portrait-primary" when the page loads
// screen.orientation.lock("portrait-primary");


// document.addEventListener("DOMContentLoaded",function () {
//   if (window.innerwidth<576 && window.scrollY<424){
//       element.style.position = 'absolute'; // Change this line to apply the new desired style
//       element.style.top = '53%'; // Change this line to apply the new desired style
//       element.style.width = '68%';
//       // Add more style changes as needed for the "scrolled back to top" state
//       element.textContent="Register for our Event";

//   }else if (window.innerwidth>576){
//     element.style.position = 'absolute'; // Reset the background color
//     element.style.top = '53%';
//     element.style.width='30%';

//   }
// });





