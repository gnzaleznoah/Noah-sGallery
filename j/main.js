document.addEventListener('DOMContentLoaded', init);
var myInterval;

function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const back_trg = document.querySelector(".bck-triangle");
  const next_btn = document.querySelector(".next-btn");
  const next_trg = document.querySelector(".nxt-triangle");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");
  
   next_btn.addEventListener("click",changeSlide);
   next_trg.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);
   back_trg.addEventListener("click", changeSlide);

   myInterval = setInterval(changeSlide, 2000);
}

function changeSlide(e) {
  if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    clearInterval(myInterval);
  }    
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    let nextUp = "";
    let caption = document.getElementById('caption');

    if(!e || e.target.className == 'next-btn' || e.target.className == 'nxt-triangle') {
    
      nextUp = showing.nextElementSibling;
      console.log(nextUp);
    } 
    else if(e.target.className == 'back-btn' || e.target.className == 'bck-triangle') {
      nextUp = showing.previousElementSibling;
      console.log(nextUp);
    } 

    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

//gragb alt text from current img
  let altText = nextUp.getAttribute('alt');

//change figcaption to alt text
  caption.innerText = altText
  }



//change current albumn 
function changeAlbum(albumName){

}
