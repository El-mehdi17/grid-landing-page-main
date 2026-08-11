let menu=document.querySelector(".menu");
let menu_list=document.querySelector(".menu_list");

menu.addEventListener("click",function(){
    menu.innerHTML=menu.innerHTML==='<h1 class="menu_title">=</h1>'?` <ul class="menu_list">
      <li><a href="#">About</a></li>
      <li><a href="#">Our Work</a></li>
      <li><a href="#">Partners</a></li>
      <li><a href="#">Annual Report</a></li>
      <li><a href="#">Donate</a></li>
    </ul>`:`<h1 class="menu_title">=</h1>`;
})

window.addEventListener("resize",function(){
if(window.innerWidth<768){ 
  menu.innerHTML=menu.innerHTML=`<h1 class="menu_title">=</h1>`
  
} 
else{
  menu.innerHTML=menu.innerHTML=`<ul class="menu_list">
      <li><a href="#">About</a></li>
      <li><a href="#">Our Work</a></li>
      <li><a href="#">Partners</a></li>
      <li><a href="#">Annual Report</a></li>
      <li><a href="#">Donate</a></li>
    </ul>`
}
})
