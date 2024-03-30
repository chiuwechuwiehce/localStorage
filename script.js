let rand = 0
window.addEventListener('load', function () {
  if (window.localStorage.getItem('rand') === null){
    window.localStorage.setItem('rand', 0)
    console.log(window.localStorage.getItem('rand'))
  } else {
    console.log(window.localStorage.getItem('rand'))
    rand = window.localStorage.getItem('rand')
    console.log("e")
    console.log(rand.toString())
    document.getElementById("rando").innerHTML = rand.toString()
  }
})


function runrand(){
  rand = randInt(1,100)
  document.getElementById("rando").innerHTML = rand.toString()
  window.localStorage.setItem('rand',rand)
}



function randInt(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
