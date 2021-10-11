let music = document.getElementById("cancion");
let btn_playse = document.querySelector(".btn_plause");
let photo = document.getElementById("foto_disco");
let fondo = document.querySelector(".box");
let contr = document.querySelector(".controles");
let btn_stopped = document.querySelector(".btn_stop");
let in_on = true;

btn_playse.addEventListener("click",() => {
    if(in_on)
    {
        music.play();
        photo.style.animationPlayState="running";
        fondo.style.animationPlayState="running";
        contr.style.animationPlayState="running";
        btn_playse.firstElementChild.setAttribute("src", "icons/pause.svg");
        in_on = false;
    }
    else
    {
        music.pause();
        photo.style.animationPlayState="paused";
        fondo.style.animationPlayState="paused";
        contr.style.animationPlayState="paused";
        btn_playse.firstElementChild.setAttribute("src", "icons/play.svg");
        in_on = true;
    }
})

btn_stopped.addEventListener("click", ()=>{
    music.currentTime=0;
    music.pause();
    photo.style.animationPlayState="paused";
    fondo.style.animationPlayState="paused";
    contr.style.animationPlayState="paused";
    in_on=true;
})