const searchClick = document.querySelector('.search-click');
const searchBar = document.querySelector('.search-bar');
const searchClose = document.querySelector('.search__close');
const input = document.querySelector('.search__input');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const headerBtn = document.querySelector('.header__btn');
const sectionSignup = document.querySelector('.section-signup');
const navBtn = document.querySelector('.nav__menu')
const navClose = document.querySelector('.nav__close')

searchClick.addEventListener('click',()=>{
    searchBar.classList.add('show-search')
    document.body.style.overflow = 'hidden'
})

searchClose.addEventListener('click', ()=>{
    searchBar.classList.remove('show-search')
    document.body.style.overflow = ''
})

window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('nav__scroll');
    }else{
        nav.classList.remove('nav__scroll')
    }
})

headerBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: sectionSignup.offsetTop,
        behavior:'smooth'
    })
})

navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('nav__shown')
    navBtn.classList.add('nav__menu-hidden')
})

navClose.addEventListener('click', ()=>{
    nav.classList.remove('nav__shown')
    navBtn.classList.remove('nav__menu-hidden')
})



