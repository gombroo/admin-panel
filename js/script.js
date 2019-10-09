/* Toggle Menu */

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('main').classList.toggle('active');
});
