
let pencil = document.getElementById("pencil");
let paintbrush = document.getElementById("paintbrush");
let color = document.getElementById("color");
let size = document.getElementById("size");
let canva = document.getElementById("myCanvas")
let ctx = canva.getContext("2d");
var strDataURI = canva.toDataURL();

let isMouseDown = false;


document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
    isMouseDown = true;
    
});
document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
    isMouseDown = false;
   
});
document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      
        
        ctx.fillStyle = color.value;
        ctx.fillRect(
            event.offsetX,
            event.offsetY,
            size.value, size.value
            );
        }
    });

function forReset() {
    ctx.clearRect(0, 0, canva.width, canva.height);
    var w = canva.width;
    canva.width = 0;
    canva.width = w;
    
}
function forSave() {
    console.log(canva.toDataURL());
    document.getElementById('savedImage').href =`${canva.toDataURL()}`;
}