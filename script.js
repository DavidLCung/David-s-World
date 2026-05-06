function toggleDark()  {
  document.body.classList.toggle("dark-mode");
  }
  
  function checkForm(event) {
      event.preventDefault(); 
  
    let name= document.getElementById("name").value;
    let email =document.getElementById("email").value;
   let message = document.getElementById("message").value;
  
    if(name==="" || email==="" || message===""){
      alert("Please fill out all the boxes before sending!");
    }else {
     alert("Thank you, "+name+"! Your message was sent.");
     
      document.getElementById("name").value="";
    document.getElementById("email").value = "";
      document.getElementById("message").value ="";
    }
  }