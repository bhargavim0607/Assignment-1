

function check(){
   
    var names=document.getElementById("name");
    var email=document.getElementById("mail");
    var phone=document.getElementById("tel");
    var numbers=/^[0-9]+$/;
    if(names.value.length===0){
        alert("Name must be filled out");
        return false;
        
    }
    else if(!(email.value.includes("@"))){
        alert("Enter Valid Mailid");
        return false;       
    }
    else if(phone.value.length<10 || phone.value.length>10 || !phone.value.match(numbers)){
        alert("Phonenumber should be 10 digit Numeric value");
        return false;
    }
    else{
        if(!alert( "REGISTERED SUCCESSFULLY" )){
            location.reload();
        }
        return false;
        
        
    }
    
    document.getElementById("form").reset();
}