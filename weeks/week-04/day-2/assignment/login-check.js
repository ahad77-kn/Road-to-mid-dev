const username = "ahadkn"
const password = "123456"

function checklogin () {
    if (username === "") {
        return "missing username";
    }
    if (password.length < 6) {
        return "password too short";
    }
    return "welcome";
}

console.log(checkLogin());