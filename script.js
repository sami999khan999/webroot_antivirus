"use strict";

//=================================================================================================================//
// Elements
//=================================================================================================================//

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".nav__toggle");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const cookieBody = document.querySelector(".cookie");
const cookieCloseBtn = document.querySelector(".cookie__close");
const imgTargets = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

//=================================================================================================================//
// Cookie
//=================================================================================================================//

cookieCloseBtn.addEventListener("click", function () {
  cookieBody.classList.add("hidden");
  cookieBody.style.bottom = "-12rem";
});

//=================================================================================================================//
// sthick navbar
//=================================================================================================================//

const navHeight = nav.getBoundingClientRect().height;
// The getBoundingClientRect() method is a JavaScript method that is used to retrieve the position and size of an element relative to the viewport (the browser window). It returns an object with properties representing the element's position and dimensions. //

function stick(entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}

const headerObserver = new IntersectionObserver(stick, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
// The Intersection Observer is a JavaScript API that provides a way to asynchronously observe changes in the intersection of an element with its parent container or the viewport. It allows you to efficiently track when an element enters or exits the viewport or when it intersects with another element. //

headerObserver.observe(header);

//=================================================================================================================//
// reveal section
//=================================================================================================================//

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (entry.isIntersecting)
    return entry.target.classList.remove("section--hidden");
  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//=================================================================================================================//
// moday window
//=================================================================================================================//

function openModal(event) {
  event.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

//=================================================================================================================//
// scroll behavior
//=================================================================================================================//

navLinks.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.classList.contains("nav__link")) {
    const attr = event.target.getAttribute("href");
    document.querySelector(attr).scrollIntoView({ behavior: "smooth" });
  }
});

//=================================================================================================================//
// toggle navbar
//=================================================================================================================//

toggleBtn.addEventListener("click", function (event) {
  if (navLinks.classList.contains("nav__open")) {
    navLinks.classList.remove("nav__open");
    document.querySelector("html").style.overflow = "visible";
  } else {
    navLinks.classList.add("nav__open");
    document.querySelector("html").style.overflow = "hidden";
  }
});

navLinks.addEventListener("click", function () {
  navLinks.classList.contains("nav__open") &&
    navLinks.classList.remove("nav__open");
  document.querySelector("html").style.overflow = "visible";
});

//=================================================================================================================//
// learn more scroll
//=================================================================================================================//

btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});
