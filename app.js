const showDropMenu = document.querySelector("#drop-menu-list");
console.log(showDropMenu);
showDropMenu.addEventListener('click', ()=>{
    document.querySelector('nav ul').classList.toggle('show-drop-menu')
});