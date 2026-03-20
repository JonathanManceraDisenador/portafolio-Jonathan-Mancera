var btnProyectos = document.querySelector('#btn-proyectos')
var btnLenguajes = document.querySelector('#btn-lenguaje')

var listadProyectos = document.querySelector('.listado-proyectos')
var listadoLenguajes = document.querySelector('.listado-lenguajes')


btnProyectos.addEventListener('click', e => {
    document.querySelector("#proyectos").scrollIntoView({ behavior: 'smooth' });
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    
    //verContenedor(listadProyectos,listadoLenguajes)
})
btnLenguajes.addEventListener('click', e => {
    verContenedor(listadoLenguajes,listadProyectos)
})



function verContenedor(a,b){
    a.classList.toggle("active")
    b.classList.remove("active")
}


var opcionesLenguajes = [...listadoLenguajes.children]

console.log(opcionesLenguajes)


opcionesLenguajes.forEach(opcion => {
    opcion.addEventListener("click",cambiarLenguaje)
})


function cambiarLenguaje(){
    var lenguaje = opcionesLenguajes.indexOf(this)
    localStorage.setItem("language",lenguaje)
    window.location.reload()
}