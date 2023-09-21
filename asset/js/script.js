const dark = document.querySelector("#dark");
window.onmousemove= function(e){
    const x = e.x / window.innerWidth *100;
    const y= e.y / window.innerWidth *100;
    dark.style.background = `radial-gradient(circle at ${x}% ${y}%,
        transparent,rgba(0,0,0) 90px ,black)`
}