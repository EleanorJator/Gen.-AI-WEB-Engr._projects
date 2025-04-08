let email_confirm = document.getElementById("email_confirm")
let errormessage= document.getElementById("errormessage")
email_confirm.addEventListener("keyup", function (){
  let email = document.getElementById("email").value
    
  let email_confirm_v = document.getElementById("email_confirm").value
  let issame = email == email_confirm_v

    if (email == email_confirm_v || email_confirm_v == ""){
      errormessage.style.display = "none"
      email_confirm.style.backgroundColor = "unset"
    }else{
      errormessage.style.display = "block"
      email_confirm.style.backgroundColor = "rgba(230,169,171,.5)"
    }
})


