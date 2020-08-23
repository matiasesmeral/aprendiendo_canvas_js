
let areadibujo = document.getElementById("dibujo")
let papel = areadibujo.getContext("2d")
//let boton = document.getElementById("botoncito")
document.addEventListener("keydown",funcioneventos)
//boton.addEventListener("click",pruebaboton)

//function pruebaboton()
    // location.href="https://www.google.com/" => me direcciona hacia otra pagina
//}

let objetos = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};
let x = 100
let y = 100

dibujocanvas("red",x-1,y-1,x+1,y+1,papel)

function dibujocanvas(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.lineWidth = 3
    lienzo.moveTo(xinicial,yinicial)
    lienzo.lineTo(xfinal,yfinal)
    lienzo.stroke()
    lienzo.closePath()

}

function funcioneventos(even)
{
    let colorcito = "blue"
    let movimiento = 5

   switch(even.keyCode){
    case objetos.UP:
        dibujocanvas(colorcito,x,y,x,y-movimiento,papel)
        y = y - movimiento
    break;
    
    case objetos.DOWN:
        dibujocanvas(colorcito,x,y,x,y+movimiento,papel)
        y = y + movimiento
    break;

    case objetos.LEFT:
        dibujocanvas(colorcito,x,y,x - movimiento,y,papel)
        x = x - movimiento
    break;

    case objetos.RIGTH:
        dibujocanvas(colorcito,x,y,x+movimiento,y,papel)
        x = x +  movimiento
    break;

    default:
        console.log("otra tecla")
    break;

   }
}