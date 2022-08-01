const descendentes = document.querySelectorAll("span");
const vez = document.querySelector('h3')
const status = document.querySelector('h2')

var bloqueado = false;
var p = "X"

for (var I = 0; I < descendentes.length; I++) {
    descendentes[I].addEventListener("click", function (e) {
        if (bloqueado) return false;

        let jogadas = {
            "X": () => e.srcElement.innerHTML = "X",
            "O": () => e.srcElement.innerHTML = "O"
        }

        var id = this.id
        var block = e.srcElement.innerHTML;
        blockClick(block, jogadas, id)

        vez.innerHTML = 'Vez do: ' + p
        checaVencedor()

    }

    )
}

//Funções
function blockClick(block, jogadas, id) {
    if (block === "" ) {
        if (p === "X") {
            console.log('preenchendo a caixa ' + id + ' com ' + p)
            jogadas[p]()
            p = "O"
        } else {
            console.log('preenchendo a caixa ' + id + ' com ' + p)
            jogadas[p]()
            p = "X"
        }
    }
}

function checaVencedor() {
    var quadrado0 = document.getElementById(0);
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    if (checaSequencia(quadrado0, quadrado1, quadrado2)) {
        ChangeColor(quadrado0, quadrado1, quadrado2)
        ganhador(quadrado0)
        return;
    }
    if (checaSequencia(quadrado3, quadrado4, quadrado5)) {
        ChangeColor(quadrado3, quadrado4, quadrado5)
        ganhador(quadrado3)
        return;
    }
    if (checaSequencia(quadrado6, quadrado7, quadrado8)) {
        ChangeColor(quadrado6, quadrado7, quadrado8)
        ganhador(quadrado6)
        return;
    }
    if (checaSequencia(quadrado0, quadrado3, quadrado6)) {
        ChangeColor(quadrado0, quadrado3, quadrado6)
        ganhador(quadrado0)
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        ChangeColor(quadrado1, quadrado4, quadrado7)
        ganhador(quadrado1)
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        ChangeColor(quadrado2, quadrado5, quadrado8)
        ganhador(quadrado2)
        return;
    }
    if (checaSequencia(quadrado0, quadrado4, quadrado8)) {
        ChangeColor(quadrado0, quadrado4, quadrado8)
        ganhador(quadrado0)
        return;
    }
    if (checaSequencia(quadrado2, quadrado4, quadrado6)) {
        ChangeColor(quadrado2, quadrado4, quadrado6)
        ganhador(quadrado2)
    }
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        bloqueado = true
        document.querySelector('button').hidden = false
        eigual = true;
    }
    return eigual;
}

function ChangeColor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "rgb(30, 255, 0)";
    quadrado2.style.background = "rgb(30, 255, 0)";
    quadrado3.style.background = "rgb(30, 255, 0)";

}

function ganhador(quadrado) {
    win = quadrado.innerHTML
    status.innerHTML = 'Vencedor: ' + win
}

function reset(){
    location.reload()
}
