const linea = document.querySelector(".linea")
const prev =  document.querySelector(".btn1")
const next = document.querySelector(".btn2")
const circulos = document.querySelectorAll(".circulo")

let contador = 1

prev.addEventListener("click",()=>{
    contador --;

    if(contador<1){
        contador = circulos.length
    }

    actualizar()
})


next.addEventListener("click", ()=>{
    contador++;

    if(contador>circulos.length){
        contador = circulos.length
    }

    actualizar()
})


function actualizar(){
    circulos.forEach((e,idx)=>{ //idc inicia en cero y el contador inicia en 1
        if(idx<contador){
            e.classList.add("active");
        }else{
            e.classList.remove("active")
        }
    })

    const activos = document.querySelectorAll(".active")

    linea.style.width = (activos.length-1)/(circulos.length-1)*100+"%"

    if(contador===1){
        prev.disabled = true
    }else if(contador === circulos.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }

}