const t = 0
const p = 1  
const r = 2

var vitorias = 0;
var derrotas = 0;

function atualizarPlacar() {
    const placar = document.getElementById("placar");
    placar.textContent = `Vitórias: ${vitorias} | Derrotas: ${derrotas}`;
}

const tesoura = document.getElementById("tesoura")
tesoura.addEventListener("click", function tesoura(){
    var o = Math.floor(Math.random()*3)
    if(o == 0){
        alert("Empate!!!")
    }
    if(o == 2){
        alert("Você perdeu!!!")
        derrotas++
        atualizarPlacar()
    }
    if(o == 1){
        alert("Você ganhou!!!")
        vitorias++
        atualizarPlacar()
    }
})

const papel = document.getElementById("papel")
papel.addEventListener("click", function papel(){
    var o = Math.floor(Math.random()*3)
    if(o == 0){
        alert("Você perdeu!!!")
        derrotas++
        atualizarPlacar()
    }
    if(o == 1){
        alert("Empate!!!")
    }
    if(o == 2){
        alert("Você ganhou!!!")
        vitorias++
        atualizarPlacar()
    }
})

const pedra = document.getElementById("pedra")
pedra.addEventListener("click", function pedra(){
    var o = Math.floor(Math.random()*3)
    if(o == 0){
        alert("Você ganhou!!!")
        vitorias++
        atualizarPlacar()
    }
    if(o == 1){
        alert("Você perdeu!!!")
        derrotas++
        atualizarPlacar()
    }
    if(o == 2){
        alert("Empate!!!")
    }
})


