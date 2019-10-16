/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* TOGGLE MENU */

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('main').classList.toggle('active');
});


/* MOBILE MENU */

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('#hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});


/* MODALS */

// close modal by removing "show" class
function closeModal() {
  document.getElementById('ovrl').classList.remove('show');
}

// attach closeModal function to 'js-close-modal' class
document.querySelectorAll('#ovrl .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// close modal by clicking on the background overlay
document.querySelector('#ovrl').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

// close modal by clicking ESC
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

// open modal
function openModal(modal) {
  document.querySelectorAll('#ovrl > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#ovrl').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

const modalButtons = document.querySelectorAll('.modal-open');

for (let item of modalButtons) {

  item.addEventListener('click', function() {

    const modal = this.getAttribute('data-modal');
    openModal(modal);
  });
}


/* CHART GENERATOR */

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
    // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 150, 180, 200, 220, 320, 400, 300, 280, 300, 280 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 400, 180, 300, 280, 450, 150, 200, 480, 320, 200 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 350, 200, 220, 350, 420, 400, 300, 280, 300, 280 ],
      hidden: true,
    }
    ]
  },
});
