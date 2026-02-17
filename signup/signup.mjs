let current_user_string = localStorage.getItem("currentuser")
let current_user = JSON.parse(current_user_string)

if(current_user){
    window.location.href = "/post/post.html"
}


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


    if (!email) {
        document.querySelector("#msg").innerText = "Enter Email"
        return
    }

    if (!email.includes("@")) {
        document.querySelector("#msg").innerText = "Enter Valid Email"
        return
    }

    if (!password) {
        document.querySelector("#pass").innerText = "Enter Password"
        return
    }

    if (!confirm_password) {
        document.querySelector("#m_confirm").innerText = "Confirm Your Password"
        return
    }

    if (password !== confirm_password) {
        document.querySelector("#m_confirm").innerText = "Passwords don't match"
        return
    }


    let all_users_strings = localStorage.getItem("users");
    let all_users = (all_users_strings) ? JSON.parse(all_users_strings) : [];


    let existing_user = all_users.find((users) => {

        return users.email.toLowerCase() === email.toLowerCase()
    })

    if (existing_user) {

        document.querySelector("#msg").innerText = "Email Already Taken"
        return
    }

    let new_user = {
        email: email.toLowerCase(),
        password: password
    }

    let updated_users = [new_user, ...all_users]

    localStorage.setItem("users", JSON.stringify(updated_users))

    window.location.href = "/login/login.html"





})