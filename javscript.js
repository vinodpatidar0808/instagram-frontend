const accountbox = document.querySelector(".account")

const navProfile = document.querySelector("#nav-profile")

// navProfile.addEventListener("mouseover", () => {
//     accountbox.classList.toggle("active")
// })
navProfile.addEventListener("click", () => {
    accountbox.classList.toggle("active")
})
// accountbox.addEventListener("mouseout", () => {
//     accountbox.classList.toggle("active")
// })