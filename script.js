const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElem = document.querySelectorAll('.has-fade')

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

document.addEventListener('click', tabClick);
function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.categories li a'), 
        tabContents = document.querySelectorAll('.galleryImg li');
            
                
    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();
            
                    
        if (elem.className.indexOf('active') == -1) {
                        
            for (var i = 0; i < tabs.length; i++) {
                 tabs[i].classList.remove('active');
                 tabContents[i].classList.remove('visible');
            }
            
                        
            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
}


  
