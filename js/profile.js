const getData = function(){
    var nameInput = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var emailInput= document.getElementById("email").value;
    const button = document.getElementById("enviar").value;
   
    console.log(nameInput+" "+lastName+" "+emailInput);
}
button.addEventListener("click");

var guardarData= function(nameInput, lastName, emailInput){
   localStorage.setItem(nameInput);
   localStorage.setItem(lastName);
   localStorage.setItem(email);
    
}
return guardarData(this.nameInput, this.lastName, this.email);
 