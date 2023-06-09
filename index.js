const rndInt = Math.floor(Math.random() * 6) + 1
const rndInt2 = Math.floor(Math.random() * 6) + 1

document.querySelector(".firstimg").setAttribute('src', `images/dice${rndInt}.png`)
document.querySelector(".secimg").setAttribute('src', `images/dice${rndInt2}.png`)

if(rndInt===rndInt2){
    document.querySelector("h1").innerText="Match Draw!!"
}
else if(rndInt>rndInt2){
    document.querySelector("h1").innerText="Player 1 wins!"
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!"
}