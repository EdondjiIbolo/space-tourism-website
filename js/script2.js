const toggleElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');

const slide = document.getElementById('slide');
const paginacionElement = document.getElementById('paginacion');
const RootStyles = document.documentElement.style;

const PlanetImage = document.querySelector('.crew-img');
toggleElement.addEventListener('click', (e)=>{
 

        menuElement.classList.toggle('show');

    if(toggleElement.children[0].src.includes('assets/shared/icon-hamburger.svg')){
        toggleElement.children[0].src = 'assets/shared/icon-close.svg';

    }else{
        toggleElement.children[0].src = 'assets/shared/icon-hamburger.svg';
    }
    
});

paginacionElement.addEventListener('click', (e)=>{
    if(e.target.dataset.image){
        console.log(e.target.dataset.image)
        PlanetImage.src = `/assets/crew/image-${e.target.dataset.image}-${e.target.dataset.surname}.png`;
        let translate = e.target.dataset.translate;
        RootStyles.setProperty('--translate', translate);
        for(let clases of paginacionElement.children){
            if(clases.classList.contains('button-active')){
                clases.classList.remove('button-active')            }
            
        }
        e.target.classList.add('button-active')
    }
    
})