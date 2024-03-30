let rand = 0
if (localStorage.getItem('rand') === null){
  localStorage.setItem('rand', 0)
} else {
  rand = localStorage.getItem('rand')
  document.getElementById("rando").innerHTML = rand.toString()
}


function runrand(){
  rand = randInt(1,100)
  document.getElementById("rando").innerHTML = rand.toString()
  localStorage.setItem('rand',rand)
}



function randInt(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
