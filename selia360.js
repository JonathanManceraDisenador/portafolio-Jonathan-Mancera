var imgCostumer = document.querySelector(".costumerJourney").querySelectorAll("img")


var contenedorImg = document.querySelector('.imagenes')
var imgs = contenedorImg.querySelectorAll ("img")

var menuImg = document.querySelector('.menu')
var botones = menuImg.querySelectorAll ("p")

var infoImg = document.querySelector('.info')
var parrafos = infoImg.querySelectorAll ("p")

var IMGactiva = 0


var fotoAnterior = document.querySelector('.foto_anterior')

var fotoSiguiente = document.querySelector('.foto_siguiente')

botones.forEach((boton,index) => {
    boton.addEventListener("click", e =>{
        cambiarIMG(index)
    })
})

fotoAnterior.addEventListener("click", e => {rotacionIMG(-1)})
fotoSiguiente.addEventListener("click", e => {rotacionIMG(+1)})


function cambiarIMG(index){
    imgs.forEach(img => {
        img.classList.remove("active")
    })

    botones.forEach(boton => {
        boton.classList.remove("active")
    })

    parrafos.forEach(parrafo => {
        parrafo.classList.remove("active")
    })

    imgs[index].classList.add("active")

    botones[index].classList.add("active")

    parrafos[index].classList.add("active")

    IMGactiva = index
}

function rotacionIMG(add){
  

    if(IMGactiva+add >3){
        IMGactiva=0
    }else if(IMGactiva+add <0){
        IMGactiva=3
    }else{
        IMGactiva = IMGactiva+add 
    }
    
    cambiarIMG(IMGactiva)

}


document.addEventListener('DOMContentLoaded', () => {

    var lengujae = localStorage.getItem("language")
    console.log(imgCostumer)
    imgCostumer[lengujae].remove()

})