function toggleMode() {

  // alert("oi")
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains("light")){
  //   html.classList.remove("light")
  // }else{
  //   html.classList.add("light")
  // }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg")
  }

}