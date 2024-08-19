function openNavBar(){
    if(document.getElementById("nav-bar").classList.contains('alive-nav')){
      document.getElementById("nav-bar").classList.remove('alive-nav');
    }else{
      document.getElementById("nav-bar").classList.add('alive-nav');
    }
  }
AOS.init();

window.addEventListener("scroll", ()=>{
  if(scrollY > 0){
    document.getElementById("header").classList.add("light");
  }else{
    document.getElementById("header").classList.remove("light");
  }
})