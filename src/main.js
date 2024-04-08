'use strict';

function openMobileMenu() {
  const modal = document.getElementById('mobile-menu');
  modal.classList.add('is-open');
}

function closeMobileMenu() {
  const modal = document.getElementById('mobile-menu');
  modal.classList.remove('is-open');
}
