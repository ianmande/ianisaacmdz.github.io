const menuBurger = document.querySelector("#burger")
const menuContainer = document.querySelector("#menu-container-id")

    menuBurger.addEventListener('click', ()=>{
        menuBurger.classList.toggle('is-active')
        if(menuContainer.classList.contains('is-active')){
            menuContainer.classList.remove('is-active')
            menuContainer.classList.add('deactivate')
        }else{
            menuContainer.classList.remove('deactivate')
            menuContainer.classList.add('is-active') 
        }
    })