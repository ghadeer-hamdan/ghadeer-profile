let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
 menu.onclick = () => {
     menu.classList.toggle("move");
     navbar.classList.toggle("open-menu");
 }; 
 
 window.onscroll = () => {
   menu.classList.remove("move");
   navbar.classList.remove("open-menu");
};

//Swiper JS 
var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  
   //scrollreveal Animation
   const Animation = ScrollReveal(
    {
      origin:"top",
      distance:"60px",
      duration:"2500",
      delay:'100',
    });

  window.sr1=ScrollReveal({duration:1050,distance:'50px',easing:'ease-in'});
  window.sr=ScrollReveal({duration:1350,distance:'250px',easing:'ease-out'});
  Animation.reveal(".nav");
  Animation.reveal(".about-div",{origin:"left",reset:false});
  Animation.reveal(".about-img",{origin:"right",reset:false});
 sr1.reveal(".heading",{origin:"bottom",reset:false});
 sr.reveal(".top",{origin:"left",reset:true});
 sr.reveal(".left ",{origin:"left",reset:true});
 sr.reveal(".right",{origin:"right",reset:true});
 sr.reveal(".university" ,{origin:'bottom' ,rotate:{x:-1000,z:-1000},reset:true});
 sr.reveal(".school" ,{origin:'bottom' ,rotate:{x:1000,z:1000},reset:true});
 Animation.reveal(".experience ,.eexperience-div",{origin:"bottom",reset:true});
