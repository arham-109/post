let current_user_string = localStorage.getItem("currentuser")
let current_user = JSON.parse(current_user_string)

if (!current_user) {
    window.location.href = "/login/login.html"
}


function logout() {
    localStorage.removeItem("currentuser")

    window.location.href = "/login/login.html"
}


document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault()

    const title = document.querySelector("#title").value
    const description = document.querySelector("#desc").value

    let all_post_strings = localStorage.getItem("posts")
    let all_post = JSON.parse(all_post_strings) || []
    let new_post = {
        title: title,
        description: description,
        time: new Date().getTime(),
        createdby: current_user.email,
    }

    const updated_post = [new_post, ...all_post]
    let updated_post_string = JSON.stringify(updated_post)
    localStorage.setItem("posts", updated_post_string)


    e.target.reset()

    render()
})

function render() {

    const all_post = JSON.parse(localStorage.getItem("posts")) || []

    const output = document.querySelector("#output")
    output.innerHTML = ""

    all_post.forEach((post) => {

        output.innerHTML +=

            `<div class="mt-10 border-2 p-4 w-[80%] flex justify-center mx-auto mb-8 rounded-2xl text-center">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h2 class = "text-3xl font-bold wrap-break-word items-center max-w-[70%] text-[22px] text-center">
                    ${post.title}
                </h2>
 
                <h3 class="font-bold text[10px] mt-1">
                    ${moment(post.time).fromNow()}
                </h3>

                <h4 class="font-bold trunacate">
                    ${post.createdby}
                </h4>
                <div class="md:max-w-[50%] text-center flex justify-center">
                    <p class="text-center max-w-[50%] wrap-break-word   ">
                    ${post.description}
                </p>
                </div>
                </div>
            </div>`
    });

}
render()
