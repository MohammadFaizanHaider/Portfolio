let menu=document.getElementById("menu")
let links=document.getElementById("links")

menu.addEventListener("click", function(){
    if(links.classList=="links"){
        links.classList.add("active")
    }else{
        links.classList.remove("active")
    }
})

let form=document.getElementById("f1")

function validateEmail(email){
     emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailRegex.test(email)
}

form.addEventListener("submit", function(event){
        let name=document.getElementById("s_name")
        let email=document.getElementById("s_email")
        let subject=document.getElementById("s_sub")
        let massege=document.getElementById("s_mass")

        event.preventDefault()

        let namevalue=name.value
        let emailvalue=email.value
        let subjectvalue=subject.value
        let massegevalue=massege.value

        if(namevalue==""){
            name.style.border="2px solid red"
            return;
        }
        if(validateEmail(emailvalue)==false){
            email.style.border="2px solid red"
            return;
        }
        if(subjectvalue==""){
            subject.style.border="2px solid red"
            return;
        }
        if(massegevalue==""){
            massege.style.border="2px solid red"
            return;
        }
        alert("Massge send successfully");
})
