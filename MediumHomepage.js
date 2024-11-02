const navCambio = document.querySelector('nav')
const btnCambio = document.getElementById("pulsantespeciale")

window.addEventListener('scroll',()=>{
    if(window.scrollY>450){
        navCambio.classList.add('scrollato');
        navCambio.style.backgroundColor="white"
        btnCambio.style.backgroundColor="#1a8917"
    }
    else{
        navCambio.style.backgroundColor=" #ffc017"
         btnCambio.style.backgroundColor="black";
    }

})




const navAgg= document.querySelector('nav')
const sidebar= document.querySelector('#partedestra')
 
window.addEventListener('scroll',()=>{
    const scrollTop = window.scrollY;

    if(scrollTop>=900){
        sidebar.style.position= 'fixed';
        sidebar.style.top= '60px';
    }
    else{
        sidebar.style.position = 'absolute';
        sidebar.style.top='1020px'
    }
})