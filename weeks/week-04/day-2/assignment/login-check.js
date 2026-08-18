const username = "ahadkn"
const password = "123456"

function checkLogin () {
    if (username === "") {
        return "missing username";
    }
    if (password.length < 6) {
        return "password too short";
    }
    return "welcome";
}

console.log(checkLogin());

/*
Test results:
username "", password "123456" -> missing username
username "ahad", password "123" -> password too short
username "ahad", password "123456" -> welcome
username "muhammad", password "password123" -> welcome
*/