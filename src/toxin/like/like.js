require("./like.sass")
require("./__amount/like__amount.js")
require("./_liked/like_liked.js")


$(function(){
    for (let like of $('.js-like')){
        like.addEventListener('click', () => {
            like.classList.toggle('like_liked')
        })
    }
})