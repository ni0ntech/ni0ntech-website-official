// Placeholder JavaScript file for interactivity
console.log('ni0ntech loaded');


function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// Collapse menu on any nav link click (including anchor links)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav-links');
    if (nav.classList.contains('show')) {
      // Allow anchor jump to happen first
      setTimeout(() => {
        nav.classList.remove('show');
      }, 100);
    }
  });
});

// Fallback: Close nav menu when clicking anywhere outside it
document.addEventListener('click', function (event) {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  const clickedInsideMenu = nav.contains(event.target) || hamburger.contains(event.target);

  if (nav.classList.contains('show') && !clickedInsideMenu) {
    nav.classList.remove('show');
  }
});
