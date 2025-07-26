const hero = document.querySelector(".hero");
const card = document.querySelector(".card");
// items
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

//Moving Animation Event
hero.addEventListener("mousemove", (e) =>{
    const xAxis = (window.innerWidth / 2 -e.pageX) /25;
    const yAxis = (window.innerHeight / 2 -e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In
hero.addEventListener("mouseenter", (e) =>{
    card.style.transition = "none";
});

//Popout
sneaker.style.transform = "translateZ(200px) rotateZ(-25deg)"
title.style.transform = "translateZ(150px)";
text.style.transform = "translateZ(125)";
sizes.style.transform = "translateZ(100px)";
purchase.style.transform = "translateZ(75px)";

//Animate Out
hero.addEventListener("mouseleave", (e) =>{
  card.style.transition = "transform 0.5s ease";
  card.style.transform = `rotateY(0) rotateX(0)`;
});

// Popback
sneaker.style.transform = "translateZ(0) rotateZ(0deg)";
title.style.transform ="translateZ(0)";
text.style.transform ="translateZ(0)";
sizes.style.transform ="translateZ(0)";
purchase.style.transform ="translateZ(0)";