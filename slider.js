(function(){
    const slider = [...document.querySelectorAll('.slider-body')]; 
   //lo encerramos entre [] + los ... para CONVERTIRLO en ARRAY
    
   const arrowNext = document.getElementById('next');
   const arrowBefore = document.getElementById('before');
   let value;

   arrowNext.addEventListener('click', ()=>changePosition(1));

   arrowBefore.addEventListener('click', ()=>changePosition(-1));

   function changePosition(change){
       const currentElement = Number(document.querySelector(".slider-body-show").dataset.id);

       value = currentElement;
       value += change;
       if(value ===0 || value == slider.length+1){
           value = value === 0 ? slider.length : 1;

       } //con esto permitimos que cuando llegamos a la ultima foto
       // se pueda volver a la primera, y si estando en la primera
       //queremos volver, como no hay elemento 0, vamos a ir a la ultima

     slider[currentElement-1].classList.toggle('slider-body-show');
     slider[value-1].classList.toggle('slider-body-show');
    }

})()