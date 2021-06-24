
const nameInput = document.getElementById("name").value;
const lastName = document.getElementById("lastname").value;
const emailInput= document.getElementById("email").value; 
{
    const guardarData = ()=>
    {
    localStorage.setItem(nameInput);
    localStorage.setItem(lastName);
    localStorage.setItem(emailInput);
        
    }
   return (console.log(nameInput, lastName, emailInput))

}

