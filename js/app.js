// GALLERY SECTION

const gallery = document.getElementById('gallery')
let galleryContent = ''

const galleryArr = [
    {
        id: 01,
        img: './img/Typo-Image-01.png'
    },
    {
        id: 02,
        img: './img/Typo-Image-02.png'
    },
    {
        id: 03,
        img: './img/Typo-Image-03.png'
    },
    {
        id: 04,
        img: './img/Typo-Image-04.png'
    },
    {
        id: 05,
        img: './img/Typo-Image-05.png'
    },
    {
        id: 06,
        img: './img/Typo-Image-06.png'
    },
    {
        id: 07,
        img: './img/Typo-Image-07.png'
    },
    {
        id: 08,
        img: './img/Typo-Image-08.png'
    },

]

function creator() {
    for(let img of galleryArr){
        galleryContent +=
        `<a href='${img.img}'><img src=${img.img} alt=""></a>`
    }
    return galleryContent
}

galleryInput = creator()
gallery.innerHTML = galleryInput


// VALIDATE SECTION

const fullName = document.getElementById('name')
const mail = document.getElementById('mail')
const tel = document.getElementById('tel')
const reset = document.getElementById('reset')

const submit = document.getElementById('submit')

submit.addEventListener('click', function(){
    if(!fullName.value){
        fullName.insertAdjacentHTML('afterend', `<div class="error">Udfyld venligst navn</div>`)
        console.log('hul igennem')
    }
    if(!mail.value){
        mail.insertAdjacentHTML('afterend', `<div class="error">Udfyld venligst email</div>`)
        console.log('hul igennem')
    }
    if(!tel.value){
        tel.insertAdjacentHTML('afterend', `<div class="error">Udfyld venligst telefonnummer</div>`)
        console.log('hul igennem')
    }

})

reset.addEventListener('click', function (){
    location.reload()
})

