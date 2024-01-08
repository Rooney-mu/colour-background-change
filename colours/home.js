 

  const btn=document.getElementById('color');
  const  div=document.getElementById('circle');
  btn.addEventListener('click', function() {
     //  change color
     div.style.backgroundColor = 'salmon';
   });

   const btn1=document.getElementById('color-1');
   const div1=document.getElementById('circle-1')
   btn1.addEventListener('click',function (){
     div1.style.backgroundColor="blue";
   });

   const btn2=document.getElementById('color-2');
   const div2=document.getElementById('circle-2');

   btn2.addEventListener('click',function(){
     div2.style.backgroundColor='red';
   })
 const btn3=document.getElementById('color-3');
 const div3=document.getElementById('circle-3');
 btn3.addEventListener('click',function(){
  div3.style.backgroundColor='green';
 })
 const btn4=document.getElementById('color-4');
 const div4=document.getElementById('circle-4');
 btn4.addEventListener('click',function(){
div4.style.backgroundColor='black';
 })
 function reset(){
  div.style.backgroundColor = 'aqua';
  div1.style.backgroundColor = 'rgb(63, 63, 3)';
  div2.style.backgroundColor = ' rgb(43, 32, 95)';
  div3.style.backgroundColor = ' rgb(170, 77, 120)';
  div4.style.backgroundColor = ' rgb(52, 133, 69)';
 }