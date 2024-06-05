const btnOpenClose = document.querySelector("#menu-btn")
const menuIcon = document.querySelector("#menu-icon") 
const navList = document.querySelector("#nav-list")


document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('h4').style.opacity = '1';
        item.querySelector('p').style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('h4').style.opacity = '0';
        item.querySelector('p').style.opacity = '0';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth' // Hace que el desplazamiento sea suave
            });
        }
    });
});

function verPDF(url) {
    window.open(url, '_blank');
}

function descargarPDF(url) {
    var link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    link.click();
}

btnOpenClose.addEventListener("click", function() {
    const navList = document.querySelector("#nav-list")
    if(menuIcon.classList.contains("bi-list")){
        menuIcon.classList.remove("bi-list"); //Esto es para cambiar el icono a la X
        menuIcon.classList.add("bi-x");
        //Esto es para abrir el menu
        navList.classList.add("open-nav-list")
        navList.classList.remove("close-nav-list")
    }
    else{
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
        //Esto es para cerrar el menu
        navList.classList.add("close-nav-list")
        navList.classList.remove("open-nav-list") 
    }

});

// Cerrar el menú desplegable si se hace clic fuera de él
document.addEventListener('click', function(event) {
    event.stopPropagation();
    menuOpenClose(event)
});

document.addEventListener('scroll', function(event) {
    event.stopPropagation();
    menuOpenClose(event)
});

function menuOpenClose(event){
    btnOpenClose.classList.add("close-nav-list")
    btnOpenClose.classList.remove("open-nav-list") 
    var targetElement = event.target; // Elemento en el que se hizo clic
    if (targetElement !== menuIcon && !navList.contains(targetElement)) {
        // Si el clic no fue en el botón ni dentro del menú, ocultar el menú
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
        navList.classList.add("close-nav-list")
        navList.classList.remove("open-nav-list") 
    }
}