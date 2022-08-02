// EFEITOS DE SCROLL LIB
AOS.init()

// NAVBAR ANIMÇÃO

let nav = document.getElementsByClassName('navbar')[0]
let ultimaposiçao = 0

document.addEventListener('scroll', () => {
  let atualposiçao = window.scrollY

  if(atualposiçao > ultimaposiçao) {
    nav.classList.remove('show')
  } else {
    nav.classList.add('show')
  }

  ultimaposiçao = atualposiçao

})

//  MENU MOBILE

// EFEITO DE SCROLL

window.addEventListener('scroll',() => {
  if (window.scrollY >= 3) {
    mobileMenu.classList.add('menu-scrolled')
  } else {
    mobileMenu.classList.remove('menu-scrolled')
  }
})

// ABRE E FECHA

let mobileMenu = document.querySelector('.mobile-menu')
let closeMobileMenu = document.querySelector('.close-Menu')

mobileMenu.addEventListener('click',() => {
  let list = document.querySelector('.mobile-list').classList.add('open-menu')
  
})

closeMobileMenu.addEventListener('click',() => {
  let list = document.querySelector('.mobile-list').classList.remove('open-menu')
  
})

function fechaMenuMobile(link) {
  let list = document.querySelector('.mobile-list').classList.remove('open-menu')
}