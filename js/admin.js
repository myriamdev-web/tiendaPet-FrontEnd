function mostrarForm(){
    alert("estoy funcionando!!!")
  };
  //validation html5 bootstrap 4 class="was-validated"
$("#btnSubmit").click(function(event) {

  // Fetch form to apply custom Bootstrap validation
  var form = $("#myForm")

  if (form[0].checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  
  form.addClass('was-validated');
  // Perform ajax submit here...
  
});
