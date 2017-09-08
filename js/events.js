//define functions here

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  submitIt()
  pressIt()
});

function getIt(){
  $('p').on('click', alert('Hey!'))
}

function frameIt(){
  $('img').on('load', ()=>{
    $('img').addClass('tasty')
  })
}

function submitIt(){
  $('form').on('submit', alert('Your form is going to be submitted now.'))

}

function pressIt(){
  $('#typing').on('keydown', (event)=>{
    if(event.which === 71){
      alert("You pressed g!")
    }
  })
}
