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
        // t.classList.add('active')   
        if(t === tab[1]){
            tab[0].classList.remove('active')
            tab[2].classList.remove('active')
            tab[1].classList.add('active')
        } else if (t === tab[2]){
            tab[0].classList.remove('active')
            tab[1].classList.remove('active')
            tab[2].classList.add('active')
        } else {
            tab[1].classList.remove('active')
            tab[2].classList.remove('active')
            tab[0].classList.add('active')
        }scroll-header
    })
})



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.querySelector('header')

    // when the scroll is greater than 80 viewport height, add the scoll-header class to the header tag
    if(this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)
// 