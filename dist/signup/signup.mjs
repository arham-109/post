window.onload = () => {
    const body = document.getElementById('page-body');
    body.classList.remove('opacity-0', 'translate-y-4');
    body.classList.add('opacity-100', 'translate-y-0');
};

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirm_password = document.querySelector("#confirm").value

    if(!email){
        alert("Enter Email")
        returny
    }

    if(!email.includes("@")){
        alert("Enter Valid Email")
        return
    }

    if(!password){
        alert("Enter Password")
        return
    }

    if(password !== confirm_password){
        alert("passwords don't match")
        return
    }
})