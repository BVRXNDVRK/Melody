$(document).ready(function () {

  // VARIABLES
  var currentFloor = 2;
  var currentFlat = 0;
  var currentFlatInfo = 0;
  const counterUp = $('.main__arrow-up');
  const counterDown = $('.main__arrow-down');
  const imagePath = $('.main__image path');
  const modal = $('.modal');
  const modalDialog = $('.modal__dialog')
  const closeBtn = $('.modal__close-button');
  const flatPath = $('.modal__path');
  const flatLink = $('.modal__flat-link');
  const floorBtn = $('.main__btn-primary');
  const openMenu = $('.header-menuOpen');
  const closeMenu = $('.header-menuClose');
  const menu = $('.header__burger');


  // HOVER
  imagePath.on('mouseover', function () {
    currentFloor = $(this).attr('data-floor');
    imagePath.removeClass('main__path--current');
    $('.main__counter').text(currentFloor);
    $(`[data-floor=${currentFloor}]`).toggleClass('main__path--current');
  });

  flatLink.on('mouseover', function () {
    flatLink.removeClass('modal__flat-link--current');
    flatPath.removeClass('modal__path--current');
    currentFlatInfo = $(this).attr('data-flatInfo');
    $(`[data-flatInfo=${currentFlatInfo}]`).toggleClass('modal__flat-link--current');
    $(`[data-flat=${currentFlatInfo}]`).toggleClass('modal__path--current');
  });

  flatPath.on('mouseover', function () {
    flatLink.removeClass('modal__flat-link--current');
    flatPath.removeClass('modal__path--current');
    currentFlat = $(this).attr('data-flat');
    $(`[data-flatInfo=${currentFlat}]`).toggleClass('modal__flat-link--current');
    $(`[data-flat=${currentFlat}]`).toggleClass('modal__path--current');
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

  // OPEN & CLOSE MODAL
  imagePath.on("click", function () {
    modal.toggleClass('modal--is-open');
    modalDialog.toggleClass('modal__dialog--is-open');
    $('.modal-counter').text(currentFloor);
  });

  closeBtn.on("click", function () {
    modal.toggleClass('modal--is-open');
    modalDialog.toggleClass('modal__dialog--is-open');
  });

  floorBtn.on("click", function () {
    modal.toggleClass('modal--is-open');
    modalDialog.toggleClass('modal__dialog--is-open');
    $('.modal-counter').text(currentFloor);
  });

  // BURGER MENU
  openMenu.on("click", function () {
  menu.toggleClass('header__burger--is-open');
  });

  closeMenu.on("click", function () {
  menu.toggleClass('header__burger--is-open');
  });
});


