const openFilter = document.getElementById("openFilter");
const closeFilter = document.getElementById("closeFilter");
const drawer = document.getElementById("filterDrawer");
const overlay = document.getElementById("filterOverlay");

if(openFilter){

    openFilter.addEventListener("click",()=>{

        drawer.classList.add("active");
        overlay.classList.add("active");

        document.body.style.overflow="hidden";

    });

}

function closeDrawer(){

    drawer.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow="";

}

if(closeFilter){

    closeFilter.addEventListener("click",closeDrawer);

}

if(overlay){

    overlay.addEventListener("click",closeDrawer);

}