var idioma


const url = window.location.pathname;
var page = url.split("/").pop()
page = page.replace(".html","")



document.addEventListener('DOMContentLoaded', () => {

    localizarIdioma()

    fetch("./texto.json")
    .then(res=> res.json())
    .then(data => {
      localizarTextos(data)
    })

})


function localizarIdioma(){
  if(localStorage.getItem("language") === null){
    localStorage.setItem("language",0)
    idioma=0
  }else{
    idioma = localStorage.getItem("language") 
  }
}


function localizarTextos(data){
  var paquete= data[page]
  var p = document.querySelectorAll("p")

  imprimirParrafos(paquete[0],[...p])
}

function imprimirParrafos(textos,parrafos){
  console.log(textos,parrafos)
  console.log(textos[0][idioma],parrafos[0])

  parrafos.forEach((parrafo,i) => {
    parrafo.textContent = textos[i][idioma]
  })
}