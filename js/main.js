$(document).ready(function () {

  // VARIABLES
  var currentFloor = 0;
  const counterUp = $('.main__arrow-up');
  const counterDown = $('.main__arrow-down');
  const imagePath = $(".main__image path");

  // HOVER
  imagePath.on('mouseover', function () {
    currentFloor = $(this).attr('data-floor');
    imagePath.removeClass('main__path--current');
    $('.main__counter').text(currentFloor);
  });

  // BUTTONS CLICK
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGroupping: false });
      $('.main__counter').text(usCurrentFloor);
      imagePath.removeClass('main__path--current');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('main__path--current');
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGroupping: false });
      $('.main__counter').text(usCurrentFloor);
      imagePath.removeClass('main__path--current');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('main__path--current');
    }
  });
});