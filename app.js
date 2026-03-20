const url = window.location.pathname;
const hash = window.location.hash;



if ((location.pathname.endsWith("/") || location.pathname === "") &&
    (location.hash === "" || location.hash === "#")) {
    window.location.replace(location.pathname + "index.html");
}

var imgsDisenoWeb = document.querySelector('#imgs_disenoWeb')



var arrayImgs = [...imgsDisenoWeb.children]



arrayImgs.forEach(img => {
    img.addEventListener("click", toggleModoVista)
});


function toggleModoVista(){

   if(this.classList.contains("active")){
        arrayImgs.forEach(img => {
            if(!img.classList.contains("active") ){
                    img.classList.remove("hidden")
            }
        })

        this.classList.remove("active")
   }else{
        this.classList.add("active")
        arrayImgs.forEach(img => {
            if(!img.classList.contains("active") ){
                    img.classList.add("hidden")
            }
        })   
   }
}