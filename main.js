const navBar = () => {
    const burger = document.querySelector(".burger")
    const list = document.querySelector(".quicklink")
    const links = document.querySelectorAll(".quicklink li")


//toggle button

burger.addEventListener("click", () => {
    list.classList.toggle("scroll-in")

    //Animation Links
    links.forEach((link, index) =>{
    if(link.style.animation){
        link.style.animation = "";
    } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.5}s`;
    }
   });

    //bURGER aNIMATION
    burger.classList.toggle("toggle");
  });
}

navBar()