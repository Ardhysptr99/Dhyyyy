const form = document.getElementById("login-form")
const username = document.getElementById("Username")
const password = document.getElementById("password")

form.addEventListener('submit', (e)=>{
    // e.preventDefault() Prevent Submit
    let errors = []

    if(username){
        errors = getLoginFormErrors(username.value,password.value);

    }
})

function getLoginFormErrors(username,password){
    let errors = []

    if(username === '' || username == null ){
        errors.push("Harap isi Username")
        Username
    } 
}