// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})



var whitediv = document.querySelector("#whitediv");
var head = document.querySelector(".head");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var photo = document.querySelector("#photo");


whitediv.addEventListener("mouseenter", function () {
  head.style.top = "-20%"
  two.style.top = "50%"

  photo.style.mixBlendMode = "difference"
})

whitediv.addEventListener("mouseleave", function () {
  head.style.top = "50%"
  two.style.top = "150%"
  three.style.top = "150%"
  photo.style.mixBlendMode = "normal"


})

whitediv.addEventListener("click", function () {
  three.style.top = "50%"
  two.style.top = "-20%"
  head.style.top = "-20%"



})

var fs = document.querySelector("#fs")

function load() {

  window.addEventListener("DOMContentLoaded", function () {

    setTimeout(() => {
      fs.style.top = "-100%"
      // fs.style.opacity = "0%"

    }, 2000);



  })
}

load();





































var page5 = document.querySelector("#page5");
var photu = document.querySelector("#photu");
var smallpic = document.querySelector("#smallpic");
var smallpic2 = document.querySelector("#smallpic2");
var smallpic3 = document.querySelector("#smallpic3");
var hollow = document.querySelector("#hollow");
var flag = 0

hollow.addEventListener("click", function () {

  if (flag === 0) {


    document.documentElement.style.setProperty('--light', 'black')
    document.documentElement.style.setProperty('--dark', 'white')
    flag = 1
  }

  else {
    document.documentElement.style.setProperty('--light', '#e3e0eb')
    document.documentElement.style.setProperty('--dark', '#1a4573')
    flag = 0;
  }
})




photu.addEventListener("mousemove", function (dets) {


  // const rotx = 58 - dets.x/13;
  const rotx = 59 - dets.x / 13;
  const roty = Math.abs(rotx);
  photu.style.transform = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
  smallpic.style.transform = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
  smallpic2.style.transform = `rotateX(${rotx}deg) rotateY(${-roty}deg)`
  smallpic3.style.transform = `rotateX(${rotx}deg) rotateY(${-roty}deg)`



})


photu.addEventListener("mouseleave", function (dets) {

  setTimeout(function () {


    photu.style.transform = `rotateX(0deg) rotateY(0deg)`
    smallpic.style.transform = `rotateX(0deg) rotateY(0deg)`
    smallpic2.style.transform = `rotateX(0deg) rotateY(0deg)`
    smallpic3.style.transform = `rotateX(0deg) rotateY(0deg)`

  }, 1000)






})




gsap.to("#page3 #lpic", {


  scrollTrigger: {
    trigger: "#page3",
    start: "top 90%",
    // markers: true,
    scrub: 3,
    end: "top 0%",
    // pin : true
  },

  left: "3%",
  // x : -800,
  duration: 10,
  ease: Power1





})
gsap.to("#page3 #rpic", {


  scrollTrigger: {
    trigger: "#page3",
    start: "top 90%",
    // markers: true,
    scrub: 3,
    end: "top 0%",
    // pin : true
  },

  right: "3%",
  // x : -800,
  duration: 10,
  ease: Power1



})



gsap.to("#page4 #lpic2", {


  scrollTrigger: {
    trigger: "#page4",
    start: "top 90%",
    // markers: true,
    scrub: 3,
    end: "top 0%",
    // pin : true
  },

  left: "3%",
  // x : -800,
  duration: 10,
  ease: Power1





})
gsap.to("#page4 #rpic2", {


  scrollTrigger: {
    trigger: "#page4",
    start: "top 90%",
    // markers: true,
    scrub: 3,
    end: "top 0%",
    // pin : true
  },

  right: "3%",
  // x : -800,
  duration: 10,
  ease: Power1



})

gsap.from("#center", {
  opacity: 0,
  ease: Power1,
  duration : 1,
  height : "0%",
  width : "0%",
  delay : 3


})


gsap.from("#nav", {
  opacity: 0,
  stagger : 0.5,
  ease: Power1,
  y : 100,
  // duration : 1,
  // height : "0%",
  // width : "0%",
  delay : 3.5


})







//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#bg"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#bg" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#bg", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
// });





// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


