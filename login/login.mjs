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

let strings_data = localStorage.getItem("users");
let all_users = (strings_data) ? JSON.parse(strings_data) : [];


let existing_user = all_users.find((users) => {
    return users.email.toLowerCase() === email.toLowerCase()
})

if (!existing_user) {
    document.querySelector("#msg").innerText = "Invalid Email or Password"
    return
}

if (existing_user.password !== password) {
    document.querySelector("#pass").innerText = "Invalid Password"
    return
}

localStorage.setItem("currentuser", JSON.stringify(existing_user))

window.location.href = "/post/post.html"

})