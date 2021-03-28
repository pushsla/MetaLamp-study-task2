require("./radio.sass")
require("./__box/radio__box.js")
require("./__label/radio__label.js")


$(function(){
    for (let radio of $('.radio')){
        let box = radio.getElementsByClassName('radio__box')[0]
        let label = radio.getElementsByClassName('radio__label')[0]
        if (box.checked){
            label.classList.add('radio__label_checked')
        }
        box.addEventListener('change', function(){
            label.classList.remove('radio__label_checked')
            if (box.checked){
                label.classList.add('radio__label_checked')
            }
        })
    }
})