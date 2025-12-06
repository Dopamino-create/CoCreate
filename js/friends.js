let p = document.querySelectorAll(".del-btn");
let z = document.querySelectorAll(".friend-card")
    
for(let i = 0; i < p.length; i++) {
  p[i].addEventListener("click", () => {
    z[i].style.display = "none";
  });
}