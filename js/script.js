
"use strict";

document.addEventListener("focusin", function (e) {
  InitializeVariablesAndEventListers();
}, true);

setTimeout(() => {
  InitializeVariablesAndEventListers();
}, 10000);

let initialized = false;


function InitializeVariablesAndEventListers() {
  //debugger;
  if (initialized) { return; }
  initialized = true;

  const aboutNatours = document.querySelector("#about-natours");
  const yourBenefits = document.querySelector("#your-benefits");
  const popularTours = document.querySelector("#popular-tours");
  const stories = document.querySelector("#stories");
  const bookNow = document.querySelector("#book-now");

  const chkbox = document.querySelector("#navi-toggle");

  aboutNatours.addEventListener("click", (event) => {
    //debugger;
    chkbox.checked = false;
  });
  yourBenefits.addEventListener("click", (event) => {
    debugger;
    chkbox.checked = false;
  });
  popularTours.addEventListener("click", (event) => {
    //debugger;
    chkbox.checked = false;
  });
  stories.addEventListener("click", (event) => {
    //debugger;
    chkbox.checked = false;
  });
  bookNow.addEventListener("click", (event) => {
    //debugger;
    chkbox.checked = false;
  });
}

