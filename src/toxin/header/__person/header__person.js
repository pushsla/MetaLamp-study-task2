require("./header__person.sass")

let person = {
    authorized: true,
    firstname: "Юлий",
    lastname: "Цезарь",
}

let authorized_block = document.getElementsByClassName('header__person_authorized')[0]
let authorization_block = document.getElementsByClassName('header__person')[0]
if (person.authorized){
    authorization_block.style.display = "none"
    authorized_block.style.display = "flex"
    authorized_block.innerHTML = `${person.firstname} ${person.lastname}`
}