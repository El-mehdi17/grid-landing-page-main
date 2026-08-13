let menu=document.querySelector(".menu");
let menu_list=document.querySelector(".menu_list");
let block=document.querySelector(".block")
let footer=document.querySelector("footer")
let at=document.querySelector(".attribution")

menu.addEventListener("click", function() {
  if (menu.innerHTML.includes("icon-menu.svg")) {
    // Affiche le menu avec bouton X
    menu.innerHTML = `
      <div class="menu">
        <div class="X">X</div>
        <ul class="menu_list">
          <li><a href="#">About</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Annual Report</a></li>
          <li><a href="#">Donate</a></li>
        </ul>
      </div>
    `;
    block.classList.toggle("ops"); // toggle séparé
    footer.classList.toggle("ops")
    at.classList.toggle("ops")
  } else {
    // Affiche l’icône menu
    menu.innerHTML = `<img class="menu_title" src="./assets/images/icon-menu.svg" alt="">`;
    block.classList.remove("ops"); // ferme le menu
    footer.classList.remove("ops")
    at.classList.remove("ops")
  }
});


window.addEventListener("resize",function(){
if(window.innerWidth<768){ 
  menu.innerHTML=menu.innerHTML=`<img class="menu_title" src="./assets/images/icon-menu.svg" alt="">`
  
} 
else{
  menu.innerHTML=menu.innerHTML=`
  <div class="menu">
     <div class="X">X</div>
  <ul class="menu_list">
      <li><a href="#">About</a></li>
      <li><a href="#">Our Work</a></li>
      <li><a href="#">Partners</a></li>
      <li><a href="#">Annual Report</a></li>
      <li><a href="#">Donate</a></li>
    </ul>
    </div>`
}
})
