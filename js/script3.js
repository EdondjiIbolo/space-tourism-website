const toggleElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');

const slide = document.getElementById('slide');
const paginacionElement = document.getElementById('paginacion');
const RootStyles = document.documentElement.style;
const Image = document.querySelector('.img');
toggleElement.addEventListener('click', (e)=>{
 

        menuElement.classList.toggle('show');

    if(toggleElement.children[0].src.includes('assets/shared/icon-hamburger.svg')){
        toggleElement.children[0].src = 'assets/shared/icon-close.svg';

    }else{
        toggleElement.children[0].src = 'assets/shared/icon-hamburger.svg';
    }
    
});


paginacionElement.addEventListener('click',(e)=>{

    if(e.target.dataset.translate){
    

    let translate = e.target.dataset.translate;
    RootStyles.setProperty('--translate', translate);
        for(let clases of paginacionElement.children){
            if(clases.classList.contains('num-active')){
                clases.classList.remove('num-active')            }
        }
    e.target.classList.add('num-active')
    Image.src = `assets/technology/image-${e.target.dataset.image}.jpg`
    }
   
})

