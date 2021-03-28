require("./checkbox.sass")
require("./__box/checkbox__box.js")
require("./__label/checkbox__label.js")

$(function(){
    for (let checkbox of $('.checkbox')){
        let box = checkbox.getElementsByClassName('checkbox__box')[0]
        let label = checkbox.getElementsByClassName('checkbox__label')[0]
        if (box.checked){
            label.classList.add('checkbox__label_checked')
        }
        box.addEventListener('change', function(){
            label.classList.remove('checkbox__label_checked')
            if (box.checked){
                label.classList.add('checkbox__label_checked')
            }
        })
    }
})