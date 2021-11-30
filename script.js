"use strict";

// console.log(document.querySelector(".nav-company"));

document
  .querySelector(".nav-company")
  .addEventListener("mouseover", function () {
    document.querySelector(".down-list1").classList.remove("hidden");
    document.querySelector(".dropdown-1").classList.add("hidden-inline");
    document.querySelector(".dropup-1").classList.remove("hidden-inline");
  });

document
  .querySelector(".nav-product")
  .addEventListener("mouseover", function () {
    document.querySelector(".down-list2").classList.remove("hidden");
    document.querySelector(".dropdown-2").classList.add("hidden-inline");
    document.querySelector(".dropup-2").classList.remove("hidden-inline");
  });

document
  .querySelector(".nav-contact")
  .addEventListener("mouseover", function () {
    document.querySelector(".down-list3").classList.remove("hidden");
    document.querySelector(".dropdown-3").classList.add("hidden-inline");
    document.querySelector(".dropup-3").classList.remove("hidden-inline");
  });

document
  .querySelector(".nav-company")
  .addEventListener("mouseout", function () {
    document.querySelector(".down-list1").classList.add("hidden");
    document.querySelector(".dropdown-1").classList.remove("hidden-inline");
    document.querySelector(".dropup-1").classList.add("hidden-inline");
  });

document
  .querySelector(".nav-product")
  .addEventListener("mouseout", function () {
    document.querySelector(".down-list2").classList.add("hidden");
    document.querySelector(".dropdown-2").classList.remove("hidden-inline");
    document.querySelector(".dropup-2").classList.add("hidden-inline");
  });

document
  .querySelector(".nav-contact")
  .addEventListener("mouseout", function () {
    document.querySelector(".down-list3").classList.add("hidden");
    document.querySelector(".dropdown-3").classList.remove("hidden-inline");
    document.querySelector(".dropup-3").classList.add("hidden-inline");
  });
