const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

btnHamburger.addEventListener('click', function(){
    

    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');

    }
    else {
        btnHamburger.classList.add('open');
        overlay.classList.add('fade-in');
        
    }

    if(header.classList.contains('open')){
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out')

    }
    else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');

        
    }
    
});

