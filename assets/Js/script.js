"use strict";

// toggle on and off 
function showMenuList(){
    const nav = document.querySelector('#nav')
    const show = document.querySelector('.show')
    const remove = document.querySelector('.remove')
    const navList = document.querySelector('.nav__list')

    if(show){
        show.addEventListener('click', ()=>{
            navList.classList.add("show__menu");
            show.classList.add('none')
            remove.classList.remove('remove')
        })
    }

    if(remove){
        remove.addEventListener('click', ()=>{
            navList.classList.remove("show__menu");
            remove.classList.add('remove')
            show.classList.remove('none')
        })
    }



}

showMenuList()


// change tab 
const tab = document.querySelectorAll(".tab")
const activeTab = document.querySelector(".active")

tab.forEach(t => {
    t.addEventListener("click", ()=>{
        t.classList.add('active')        
    })
})