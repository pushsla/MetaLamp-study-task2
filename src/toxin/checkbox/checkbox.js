require("./checkbox.sass")
require("./__box/checkbox__box.js")
require("./__label/checkbox__label.js")
require("./__toggle-label/checkbox__toggle-label.js")

$(function(){
    for (let checkbox of $('.checkbox')){
        let labelclass = (checkbox.classList.contains('checkbox_toggle')) ? "checkbox__toggle-label" : "checkbox__label"
        let box = checkbox.getElementsByClassName('checkbox__box')[0]
        let label = checkbox.getElementsByClassName(labelclass)[0]
        if (box.checked){
            label.classList.add(labelclass+'_checked')
        }
        box.addEventListener('change', function(){
            label.classList.remove(labelclass+'_checked')
            if (box.checked){
                label.classList.add(labelclass+'_checked')
            }
        })
    }
})
