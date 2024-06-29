function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easing(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
const about = document.querySelector('#aboutusection');
const benefits = document.querySelector('#benefitssection');
const ourteam = document.querySelector('#ourteamsection');
const howtobecome = document.querySelector('#howtobecomesection');
const contacts = document.querySelector('#contactssection');

const aboutLink = document.querySelector('li a[href="#aboutusection"]');
const benefitsLink = document.querySelector('li a[href="#benefitssection"]');
const ourteamLink = document.querySelector('li a[href="#ourteamsection"]');
const howtobecomeLink = document.querySelector('li a[href="#howtobecomesection"]');
const contactsLink = document.querySelector('li a[href="#contactssection"]');

aboutLink.addEventListener('click', function () {
  smoothScroll('#aboutusection', 1000);
});

benefitsLink.addEventListener('click', function () {
  smoothScroll('#benefitssection', 1000);
});
ourteamLink.addEventListener('click', function () {
  smoothScroll('#ourteamsection', 1000);
});
howtobecomeLink.addEventListener('click', function () {
  smoothScroll('#howtobecomesection', 1000);
});
contactsLink.addEventListener('click', function () {
  smoothScroll('#contactssection', 1000);
});
