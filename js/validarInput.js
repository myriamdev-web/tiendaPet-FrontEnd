const form = document.getElementById('formulario'); 

form.addEventListener('submit',(e) => {
  // Evita que se recargue la pagina
  e.preventDefault();
  //llamo a la funcion para validar los inputs
  console.log("estoy funcionando...");
    
  validar();
  
});

function validar(){
  var nombre = document.getElementById('nombre').value;
  var mail = document.getElementById('mail').value; 
  var pass = document.getElementById('pass').value; 
  

 console.log(nombre + " " + mail + " " + pass);

  if(nombre ==="" || mail ==="" || pass ===""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Los campos no deben estar vacios!',
     
    })

    // alert("Los campos no deben estar vacios!");
  }else{
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      // text: 'Los campos no deben estar vacios!',
     
    })

    
  }

}