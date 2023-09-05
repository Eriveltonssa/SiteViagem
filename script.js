
window.addEventListener('scroll', function() {
  var menuScroll = document.querySelector(`.nav-2`);
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) { 
    menuScroll.style.top = '0px';
    menuScroll.style.transition = "0.3s"
    
  } else {
    menuScroll.style.top = '7vh'; 
    // menuScroll.style.backgroundColor = "white"
    
  }
});

var agenda = document.getElementById("btn-agenda")
var url = "https://workspace.google.com/intl/pt-BR/products/calendar/"
agenda.addEventListener(`click`, ()=>{
    if(confirm("Deseja ir a página de agenda?")){
     const win = window.open(url)
    win.focus() 
    }

})



// modal

function abrirModal(){
  var modal = window.document.getElementById(`modal`)
  var hidden = window.document.getElementById(`hidden`)

  if(modal.style.display = `none` || hidden.style.display ==`none` ){
    modal.style.display =`block`

     hidden.style.display =`block`
  }else {
    modal.style.display =`none`
    hidden.style.display =`none`
  }
}



// window.addEventListener('scroll', function() {
//   var menuScroll = document.querySelector(`#modal`);
//   var scrollPosition = window.scrollY;

//   if (scrollPosition > 500 ) { 
    
  
    
//     menuScroll.style.top = '50vh';
//     menuScroll.style.transition = "0.3s"
//     menuScroll.style.display = `block`
    
//   } else if( scrollPosition < 500) {

//     scrollPosition = menuScroll.style.display = `none` 
   
   
  
    
//   }
// });






function fecharModal(){
  var modal = window.document.getElementById(`modal`)
  var hidden = window.document.getElementById(`hidden`)

  if(modal.style.display = `block` || hidden.style.display == `block`){
    modal.style.display =`none`
    hidden.style.display =`none`
  }else {
    modal.style.display =`block`
    hidden.style.display =`block`
  }
}
