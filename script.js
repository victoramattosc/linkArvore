const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

document.getElementById("btn-default")
.addEventListener("click", function () {
  document.querySelector("section").setAttribute("class", "default-color home");
});

document.getElementById("btn-default-dark")
.addEventListener("click", function () {
  document.querySelector("section").setAttribute("class", "default-dark-color home");
});

document
.getElementById("btn-peach")
.addEventListener("click", function () {
  document.querySelector("section").setAttribute("class", "peach-color home");
});

document
.getElementById("btn-peach-dark")
.addEventListener("click", function () {
  document.querySelector("section").setAttribute("class", "peach-dark-color home");
});