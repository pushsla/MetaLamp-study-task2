require("./input.sass")
require("./__field/input__field.js")
require("./__label/input__label.js")
require('jquery-mask-plugin')

$(function(){
    for (let elem of $('.input__field .input-pseudo')){
        if (elem.dataset.mask){
            $().mask.call(elem, elem.dataset.mask)
        }
    }
})
