// document.addEventListener('DOMContentLoaded', function() {
//     const el = document.querySelector('.navbar-nav');
//     var viewport_height = window.innerHeight-80;
//     el.style.bottom=-viewport_height;
//   });



document.addEventListener('click', function (event) {
    var navbar = document.querySelector('.navbar-collapse');
    var toggleButton = document.querySelector('.navbar-toggler');

    if (navbar.classList.contains('show') && !toggleButton.contains(event.target)) {
      navbar.classList.remove('show');
    }
  });



  document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    

    if(el_autohide){
      var last_scroll_top = 90;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 


const navItems = document.querySelectorAll('.nav-item a');

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