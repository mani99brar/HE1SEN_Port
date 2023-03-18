const aboutEl = document.getElementById('about');
const homeEl = document.getElementById('home');
const header = document.getElementById('header');
const midEl = document.getElementById('mid');
const imgHome = document.getElementById('imgMe');
const imgAbout = document.getElementById('meImgAbout');
const aboutDiv = document.getElementById('aboutDiv');
const manga = document.getElementById('manga');
const mobmid = document.getElementById('mobmid');


const imgHomeRect = imgHome.getBoundingClientRect();

// Set the position of img2 to match img1
imgAbout.style.left = imgHomeRect.left + "px" ;
imgAbout.style.bottom = imgHomeRect.bottom -200+ "px";


aboutEl.addEventListener("click",  async function(){
    header.style.zIndex="1";
    aboutDiv.style.zIndex = "2";
    aboutDiv.style.opacity = "1";
    midEl.style.opacity = "0";
    midEl.style.display = "none";
    mobmid.style.display = "none";
    imgAbout.style.left = "0px" ;
    imgAbout.style.bottom = "0px";

setTimeout(function() {
  midEl.style.display = "none";
  header.style.zIndex="4";
}, 500);
})
homeEl.addEventListener("click",  function(){
    location.reload();
});

      