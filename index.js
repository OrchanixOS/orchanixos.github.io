let subtitles = [
  "Minimal, without compromising on features.",
  "Completely independent, built from scratch.",
  "A modern, yet lightweight desktop experience.",
]

var currentcolormode = "dark"
var isresponsive = false

function indexload() {
  let subtitle = subtitles[parseInt(Math.random(subtitles.length) * 3)]
  document.getElementById("subtitle").innerText = subtitle
}

function hamburger() {
  var x = document.getElementById("respnav")
  var body = document.getElementById("body")
  if (x.className === "navbar") {
    x.className += " responsive"
    body.className = "hambody"
    isresponsive = true
  } else if (x.className === "navbar light") {
    x.className += " responsive"
    body.className = "hambody light"
  } else {
    if (currentcolormode === "light") {
      if (isresponsive) {
        x.className = "navbar responsive light"
        body.className = "hambody light"
      } else {
        x.className = "navbar light"
        body.className = "light"
      }
    } else {
      x.className = "navbar"
      body.className = ""
    }
    isresponsive = false
  }
}

function colormodechanger() {
  var x = document.getElementById("respnav")
  var body = document.getElementById("body")
  var colorblocknav = document.getElementById("colormodenav")
  var footer = document.getElementById("footer")
  if (currentcolormode === "light") {
    if (isresponsive) {
      body.className = "hambody"
      x.className = "navbar responsive"
    } else {
      body.className = ""
      x.className = "navbar"
    }
    footer.className = ""
    colorblocknav.innerText = "Light"
    currentcolormode = "dark"
  } else {
    if (isresponsive) {
      body.className = "hambody light"
      x.className = "navbar responsive light"
    } else {
      body.className = "light"
      x.className = "navbar light"
    }
    footer.className = "light"
    colorblocknav.innerText = "Dark"
    currentcolormode = "light"
  }
}