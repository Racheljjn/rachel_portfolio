
let toggle = document.getElementById("checkbox")
toggle.addEventListener("click",function(){
  let theme = localStorage.getItem("theme");
  
  if(theme === "dark"){
    setTheme("light");

  }else if(theme === "light"){
    setTheme("dark")
  }else if(theme === null){
    setTheme("dark")
  }

  
})

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "dark") {
    document.getElementById("theme-style").href = "blue.css";
  }

  localStorage.setItem("theme", mode);
}
