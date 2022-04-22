const numbers = document.querySelectorAll('.left__pages_page-num');

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    numbers[0].classList.remove('active');
    this.classList.add('active');
  });
}