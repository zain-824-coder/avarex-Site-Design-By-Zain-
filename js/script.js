let nav = document.querySelector('.navbar')
window.onscroll = function () {
    if (scrollY > 200) {
        nav.style.backgroundColor = '#ECEEFE';  
        nav.style.transition = '0.5s';
    }else{
        nav.style.backgroundColor = '#fff';
    }
}
let toTop=document.querySelector('.top')
toTop.style.display = "none"
toTop.onclick = function () {
    window.scrollTo(0,0)
}
window.onscroll = function () {
    if (scrollY<200) {
        toTop.style.display = "none"
    }else{
        toTop.style.display = "block "

    }
}