let container = document.querySelector(".container")

let color = document.querySelector("#color") ;

color.addEventListener("change",()=>{
    container.style["background-color"] = color.value ;
})

let size = document.querySelector("#size") ;

size.addEventListener("change",()=>{
    console.log(size.value) ;
    container.style["font-size"] = size.value+"px" ;
});

let font = document.querySelector("#fontfam") ;

font.addEventListener("change",()=>{
    container.style["font-family"] = font.family ;
})