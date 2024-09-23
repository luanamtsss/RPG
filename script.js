//************************************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
//variável que irá guardar a consequência de cada número sorteado no desafio da caverna
const consequenciasCaverna = [
    'Você encontrou um monstro terrível! Você terá que lutar com ele.',
    'Você encontrou um monstro de dificuldade média e deve enfrentá-lo.',
    'Você passou pela caverna sem nenhum problema!'    
]

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Função para batalha de nível fácil
  function batalhaFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Agora a história continua....")
    }
}

    // Função para batalha de nível médio
    function batalhaMedia(){
        
        let vidaPersonagem = 10
        let vidaInimigo = 10

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! O jogo acabou.")
        }
        else{
            alert("Você venceu! Agora a história continua....")
        }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            if(personagemPrincipal === "Guerreiro")
                iniciarJornadaGuerreiro()
            else if(personagemPrincipal === "Mago")
                iniciarJornadaMago()
            else
                iniciarJornadaArqueiro()
        break
        case "2":
            alert("Espero te ver novamente!")
        break
        default:
            alert("Isso não é uma opção! Recomeço do zero cabeçudo!")
    }
}


//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
    const personagens = ["Guerreiro", "Mago", "Arqueiro"];
  
    const sorteado = Math.floor(Math.random() * personagens.length);
    return personagens[sorteado];
  }


//************************************* Funções para jornada de cada personagem *************************************

// Função para iniciar a jornada do arqueiro
function iniciarJornadaArqueiro(){
    const opcao1 = prompt(`Você está em em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}

// Função para iniciar a jornada do guerreiro
function iniciarJornadaGuerreiro(){
    const opcao1 = prompt(`Você está em em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}

// Função para iniciar a jornada do mago
function iniciarJornadaMago(){
    const opcao1 = prompt(`Você está em em frente uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }
    else{
        alert(`Enviar para outras aventuras....`)
        return
    }
}