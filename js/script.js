const toggleElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');
const planetToggle = document.getElementById('destination');
const slide = document.getElementById('slide');
const paginacionElement = document.getElementById('paginacion');
const RootStyles = document.documentElement.style;
const PlanetImages = document.querySelectorAll('[data-planet]');
const PlanetImage = document.querySelector('.img-container');
toggleElement.addEventListener('click', (e)=>{
 

        menuElement.classList.toggle('show');

    if(toggleElement.children[0].src.includes('assets/shared/icon-hamburger.svg')){
        toggleElement.children[0].src = 'assets/shared/icon-close.svg';

    }else{
        toggleElement.children[0].src = 'assets/shared/icon-hamburger.svg';
    }
    
});


planetToggle.addEventListener('click',(e)=>{

    if(e.target.dataset.translate){
    

    let translate = e.target.dataset.translate;
    RootStyles.setProperty('--translate', translate);
        for(let clases of planetToggle.children){
            if(clases.classList.contains('planet-active')){
                clases.classList.remove('planet-active')            }
        }
    e.target.classList.add('planet-active')
    PlanetImage.children[0].src = `assets/destination/image-${e.target.dataset.planet}.png`
    }
   
})

