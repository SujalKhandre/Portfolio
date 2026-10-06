let navbars=document.querySelectorAll('.headnav_bar .nav_bar a');
console.log(navbars);
navbars.addEventListener("click", ()=>{
    for( let navbar of navbars){
        navbar.style.backgrountColor=" #4e628f;"     
    }
});