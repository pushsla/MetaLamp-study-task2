require("./headermenu.sass")

document.addEventListener('DOMContentLoaded', function(){
    let expandables = document.getElementsByClassName('headermenu__entry_expandable')
    for (let entry of expandables){
        let submenu = entry.getElementsByClassName('headermenu__submenu')[0];
        entry.onmouseover = (e) => {
            entry.classList.add('headermenu__entry_expanded');
            submenu.style.display = "flex";
        }
        entry.onmouseleave = (e) => {
            entry.classList.remove('headermenu__entry_expanded');
            submenu.style.display = "none";
        }
    }
});