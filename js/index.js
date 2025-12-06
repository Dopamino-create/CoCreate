let k = document.querySelectorAll(".Follow");

for (let i = 0; i < k.length; i++) {
  k[i].addEventListener("click", () => {
    k[i].classList.toggle("active"); 

    if (k[i].classList.contains("active")) {
      k[i].textContent = "Followed";
    } else {
      k[i].textContent = "Follow";
    }
  });
}


