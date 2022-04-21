var navLinks = document.querySelectorAll('.nav-links>div') 
var NavDropDown = document.querySelectorAll('.nav-links>div>ul') 


navLinks.forEach(item => {
  item.addEventListener('touchstart', () => {
    item.children[2].classList.toggle('dropdown')
    item.children[1].classList.toggle('image-rotate')    
  })
  item.addEventListener('mouseover', () => {
    item.children[2].classList.remove('dropdown')
    item.children[1].classList.add('image-rotate')    
  })
  item.addEventListener('mouseout', () => {
    item.children[2].classList.add('dropdown')
    item.children[1].classList.remove('image-rotate')    
  })
  NavDropDown.forEach(i => {
    
    i.addEventListener('mouseout', () => {
      item.children[2].classList.add('dropdown')
      item.children[1].classList.remove('image-rotate')    
    })
  })
})

//mobile
var mobile_menu = document.querySelector('.button-menu')
var mobileNavLinks = document.querySelector('.nav-links')
var mobileNavButtos = document.querySelector('.nav-buttons')

var linkProduct = document.querySelector('.product>p')

var linkCompany = document.querySelector('.company>p')

var linkConnect = document.querySelector('.connect>p')

mobile_menu.addEventListener('click', () => {
  mobileNavButtos.style.display = 'flex'
  mobileNavLinks.style.display = "flex"
})

linkProduct.addEventListener('click', () => {
  mobileNavButtos.classList.toggle('product-active')
  mobileNavLinks.classList.toggle('product-height')
})
linkCompany.addEventListener('click', () => {
  mobileNavButtos.classList.toggle('company-active')
  mobileNavLinks.classList.toggle('company-height')
})
linkConnect.addEventListener('click', () => {
  mobileNavButtos.classList.toggle('connect-active')
  mobileNavLinks.classList.toggle('connect-height')
})