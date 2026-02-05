const main = document.querySelector(".container");
const divEle = document.getElementById("container");
const height = divEle.clientHeight;
const width = divEle.clientWidth;

const heart = document.createElement("img");
const h = {x:50, y:30, move:false, ani:{}, dx:2, dy:2};
heart.style.width = "50px";
heart.style.height = "auto";
heart.style.zIndex = 0;
heart.style.position = "relative";
heart.src = "https://media.tenor.com/iNdYjrgY90MAAAAj/red-heart-bumping.gif";
heart.style.left = `${h.x}px`;
heart.style.top = `${h.y}px`;


main.append(heart);
main.addEventListener('click',()=>{
    if(!h.move){
        h.ani = requestAnimationFrame(mover);
        h.move = true;
    }
})

function mover(){
    if(h.y>height-55 || h.y < 0){
        h.dy *= -1;
    }
    if(h.x>width-50 || h.x < 0){
        h.dx *= -1;
    }
    h.x += h.dx;
    h.y += h.dy;
    heart.style.left = `${h.x}px`;
    heart.style.top = `${h.y}px`;
    if(h.move){
        h.ani = requestAnimationFrame(mover);
    }
}