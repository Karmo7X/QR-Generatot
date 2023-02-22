const btn = document.querySelector('.btn')
const qr = document.querySelector('.qrcode')
const qrinput= document.querySelector('.form input')
const qrimg =document.querySelector('.qrcode img')


btn.addEventListener('click', () => {
   
    if(!qrinput.value) return;
    
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput.value}`
   qr.classList.remove('d-none')
});


