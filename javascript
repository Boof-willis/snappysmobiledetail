https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"'

 
            var track = document.querySelector('.carousel-track');
var items = Array.from(track.children);
var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');

var itemWidth = items[0].getBoundingClientRect().width;
items.forEach((item, index) => {
  item.style.left = itemWidth * index + 'px';
});

nextButton.addEventListener('click', e => {
  var currentActive = track.querySelector('.carousel-item.active');
  var nextActive = currentActive.nextElementSibling;

  if (nextActive) {
    track.style.transform = 'translateX(-' + nextActive.style.left + ')';
    currentActive.classList.remove('active');
    nextActive.classList.add('active');
  }
});

prevButton.addEventListener('click', e => {
  var currentActive = track.querySelector('.carousel-item.active');
  var prevActive = currentActive.previousElementSibling;

  if (prevActive) {
    track.style.transform = 'translateX(-' + prevActive.style.left + ')';
    currentActive.classList.remove('active');
    prevActive.classList.add('active');
  }
});


      var buttons = document.querySelectorAll('.button-option');
var selectedService = 'Full Service';  // Default service

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    document.querySelector('.button-option.selected').classList.remove('selected');
    event.target.classList.add('selected');
    selectedService = event.target.textContent;  // Store the selected service
  });
});



  
var prices = {
  'Sedan': {
    'Full Service': 250,
    'Interior Only': 200,
    'Exterior Only': 150
  },
  'Coupe': {
    'Full Service': 230,
    'Interior Only': 180,
    'Exterior Only': 140
  },
  'Mid-Size SUV': {
    'Full Service': 300,
    'Interior Only': 250,
    'Exterior Only': 200
  }
};

var selectedVehicle = 'Sedan';  // Default vehicle

function selectVehicle(vehicle) {
  selectedVehicle = vehicle;
  updatePrice();
}

function updatePrice() {
  var priceElement = document.querySelector('#service-price');
  var price = prices[selectedVehicle][selectedService];
  priceElement.textContent = '$' + price;
}
