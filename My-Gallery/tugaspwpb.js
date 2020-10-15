const foto = document.querySelector('.foto-saya1')
const kutipan = document.querySelector('div p')

foto.addEventListener('click', function(){
    kutipan.classList.toggle('slide')
})

const foto2 = document.querySelector('.foto-saya2')
const kutipan1 = document.querySelector('div b')

foto2.addEventListener('click', function(){
    kutipan1.classList.toggle('slide')
})