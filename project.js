var curr=0;
let elements = document.querySelectorAll('.pnavi');
let elementsArray = Array.from(elements);
let mobnav = document.getElementById('mobnav');
let cardnav = document.getElementById('cardnav');


mobnav.addEventListener("click",  async function(){
 
tArray[curr].style.display="none";
lmArray[curr].style.display="none";
cardnav.style.display="flex";


});

let t = document.querySelectorAll('.allcards');
let tArray = Array.from(t);

let l = document.querySelectorAll('.gitlink2');
let lArray = Array.from(l);
let l2 = document.querySelectorAll('.git1');
let lmArray = Array.from(l2);



elementsArray.forEach(element => {
    element.addEventListener("click", function(event) {
      
        tArray.forEach(element => {
            element.style.display="none";
          });
          lArray.forEach(element => {
            element.style.display="none";
          });

        elementsArray.forEach(element => {
            element.style.backgroundColor = "#fff";
            element.style.color = "#000";
          });
      event.target.style.backgroundColor="#000";
      event.target.style.color="#fff";
      const index = elementsArray.indexOf(event.target);
        const k = tArray[index];
        const z = lArray[index];
        k.style.display="flex";
        z.style.display="flex";
        curr=index;
        if (screen.width <= 1100  ){
          cardnav.style.display="none";
          lmArray[index].style.display="flex";
        }
    });
  });
