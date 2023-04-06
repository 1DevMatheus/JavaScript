var altura = 0
var largura = 0

function ajusteTela(){
    altura = window.innerHeight 
    largura = window.innerWidth 
}

ajusteTela();

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0: posicaoY;

var mosquito = document.createElement('img')
mosquito.src = "./imagens/mosca.png"
mosquito.className = tamanhoRandom();
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)

;

function tamanhoRandom(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }
}