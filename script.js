//variável que irá guardar o personagem sorteado
let claPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
 
//************************************* Funções que serão repetidas ao longo do jogo *************************************
 
// Função para rolar um dado (1 a 20)
function rolarDado() {
  return Math.floor(Math.random() * 20) + 1;
}
 
// Qual Cetro escolher?
function cetro(){
  const escolhaDoCetro = prompt(`O diretor lhe oferece 5 cetros para iniciar seus estudos, escolha um!
    1 - Kitsune: Um cetro roxo com base azulada, seu formato principal é a de uma raposa de olhos vermelhos e cauda preta.
    2 - Oroch: Um cetro verde de base preta, em sua volta a duas cobras verdes e prateadas se enrolando sob ele, muito parecido com o simbolo da medicina.
    3 - Fank: Um cetro marrom de base amadeirada, em sua ponta tem formato da cabeça de um urso e em volta do cetro há garras afiadas.
    4 - Phebe: Um cetro vermelho e cinza com uma base amarelada, sua ponta esta sempre acesa com um fogo que forma uma fênix e em volta do cetro a cauda da fênix se enrola na base.
    5 - Draken: Um cetro dourada de base e detalhes brancos, sua ponta é repleta de escamas e espinhos de dragão, enquanto em sua base a o desenho de um dragão medieval se enrolando no cetro.`)
  switch(escolhaDoCetro){
    case "1":
      alert("Você escolheu a kitsune para ser sua alida, um cetro poderoso que lhe ajudará a tomar decisões astutas e ágeis.")
      alert(`Seu cetro é encolhido e desaparece, deixando apenas uma raposa com as mesmas características de seu cetro para lhe acompanha, chame-a de Kitsune e para ativar diga: "Raposo não pegue"`)
    break
    case "2":
      alert("Você escolheu o Oroch para ser seu aliado, um cetro movido pela ganância do usuário. ")
      alert(`Seu cetro é encolhido e desaprece, deixando uma pequena cobra que se enrola em seu pescoço, ela temas mesmas características de seu cetro, chame-o de Oroch e para ativar diga: "Oroch, Rastejar!"`)
    break
    case"3":
      alert("Você escolheu o Fank para ser seu aliado, um cetro que não aceita ser escolhido por pessoas que são desleais, digno de um lufa-lufa.")
      alert(`Seu cetro é encolhido e desaparece, deixando apenas um urso de 2 metros para segui-lo, se olhassem de longe, poderiam dizer ser um segurança, chame-o de Fank e para ativar diga: "Fank, Rugir!"`)
    break
    case "4":
      alert("Você escolheu a Phebe para ser sua aliada, um cetro que deseja se renovar e mudar a todo instante, geralmente seus donos são pessoas ectrovertidas e hiperativa.")
      alert(`Seu cetro é encolhido e desaparece, deixando apenas uma fênix grande o suficiente para monta-la e viajar o mundo, claramente ela emana o desejo de liberdade, chame-a de Phebe e para ativar diga: "Phebe, Ressurgir!"`)
    break
    case "5":
      alert("Você escolheu o Draken para ser seu aliado, um cetro tão antigo quanto a própria terra, geralmente seus donos são pessoas sábias e guerreiras.")
      alert(`Seu cetro é encolhido e desaparece, deixando um dragão com manchas douradas e escamas brancas, claramente ele poderia ser de uma linhagem real de tanto ouro que havia em seu corpo, chame-o de Draken e para ativar diga: "Draken, Queimar!"`)
    break
    default:
      alert(`Você não é amaldiçoado o suficiente para ganhar um cetro.`)
      return
  }
  alert("Após pegar seu cetro você pode enfim seguir em frente.")
  const floresta = prompt(`Seguindo seu caminho você passa por uma vasta floresta, de névoa densa e assustadora, com barulhos estranhos e rugidos altos, capazes de fazer tremer até mesmo seu coração, logo a frente você avista um figura estranha,
    esguia e alta, vestindo trajes de escola, muito parecidos com os seus na verdade.
    1- Se aproximar
    2- Ir embora com medo`)
  if(floresta === "1"){
    alert(`Você se aproxima e enfim perce ser você, não um espelho, mas uma versão de você, com uma voz metálica que parecia arranhar seus miolos você a ouve dizer.
      -"Enfim mais um, quantos séculos fazem que não devoro um amaldiçoado?"- Seu uniforme há um simbolo do clã de Sobretoure, claramente era um usuário de necromancia e manipulação sobrenatural.
      -"Por quê se parece tanto comigo? É extremamente assustador!- Disse eu com a voz trêmula e falha."
      -"Bom, é raro mas não incomum se ver escolhidos por ai, principalmente de Sobretoure e Modifiers. Mas eu fui expulso, pois minha peculiaridade é... eu posso me transformar em tudo temporariamente, mas se eu devoro um amaldiçoada, minha vida revigora 10 vezes mais."
      Decido acabar com tudo rápido para encontrar Lucca, mas também não posso deixar este renegado a solta, outros de mim podem morrer em outras situações, então eu inicio uma batalha com meu Clone.`)
      batalhaClone()
  }
  else{
    alert("Decido sair e passar reto despercebidamente, mas a consciência de buscar Lucca Bate e me distraio, pisando em um galho e atraindo a atenção do Clone, que me perfura com uma faca que nem havia percebido, assim finalizando minha vida.")
    return
  }
}
// lutando contra si mesmo
function batalhaClone(){
       
  let suaVida = 100
  let VidaDoClone = 100
  alert(`Sua vida é ${suaVida} e a vida do Clone é ${VidaDoClone}`)
  do{
    alert(`Sua vida é ${suaVida} e a vida do Clone é ${VidaDoClone}. Ataque!`)
    let SuaSorte = rolarDado()
    alert(`Você tirou ${SuaSorte}! Agora é a vez do Clone!`)
    let SorteDoClone = rolarDado()
    if(SuaSorte > SorteDoClone){
      VidaDoClone -= 20
      alert(`O Clone tirou ${SorteDoClone}. Você invoca seu Cetro e lança um feitiço no Clone, sua pele queima como se estivesse no próprio inferno, depois desça ele demorará para mecher com outro aluno da Curse.
      Agora o clone tem ${VidaDoClone} de vida`)
    }
    else if(SuaSorte < SorteDoClone){
      suaVida -= 20
      alert(`O Clone tirou ${SorteDoClone}. Ele lhe lança um feitiço forte o suficiente para invocar os mortos do campo de batalha, agora um exército de esqueletos saiem do chão sedentos pr sangue e só param quando cada um deles lhe acertar um golpe,
      você fica encurralado por eles e quando todos lhe acertam eles somem, você está cansado e tem ${suaVida} de vida.`)
    }
    else{
      alert("Enquanto você invoca seu cetro, ele invoca 1000 esqueletos para lhe atacar, felizmente o treinamento da Curse lhe fez bem e você derrota todos os esqueletos, ambos estão cansados por ter usado muita magia, porém a luta não acabou, Empate!")
    }
  }
  while(suaVida >0 && VidaDoClone >0)
  if(suaVida<= 0){
    alert(`O Clone Ativa sua habilidade especial e invoca uma espada feita de ossos daqueles que já matou, ele corre em volta das árvores que usa como distração chutando galhos em sua direção que você consegue cortar algumas enquanto outras passam,
    atravessando sua defesa, ele está tão rápido que parece que pode se teleportar, infelizmente você percebe que não tem chance e quando pode ver ele já lhe atravessou com a espada, tudo o que pode ver é uma espada atravessando suas entranhas enquanto você perde a vida,
    seu último suspiro se esvai junto a uma luz que sai de sua boca representando sua alma. Você morreu!`)
    return
  }
  else{
    alert(`Depois de muito tempo, você ativa sua habilidade especial e Invoca o poder mais poderoso que conhece, junto a ajuda de espiritos que existem em volta de ti, você é capaz de invocar almas de crianças amaldiçoadas que foram vítimas de seu clone,
    as almas começam a rodear o Clone com raiva e furiosas atravessam seu corpo, assim como ele, foram tirando sua vitalidade aos poucos até não sobrar nada, só o que resta é a carcaça do clone vazia,sem vida e uma espada de ossos das vítimas que ele havia feito, parabéns você o venceu e ele está morto!`)
    alert("Enfim ele pode continuar sua aventura para derrotar o sequestrador que levou seu namorado embora da escola.")
    alert(`Mais a frente encontro uma caverna na qual decido entrar, vasculhando-a encontro Lucca preso em correntes e o Sequestrador vigiando-o, isso me trouxe uma raiva tão grande, que nem pensei em um plano antes de pular na garganta dele e vingar oque meu namorado passou nesse anos.`)
    batalhaSequestro()
  }
}
// lutando contra o sequestrador
function batalhaSequestro(){
       
  let suaVida = 100
  let VidaDoSequestrador = 100
 
  alert(`Sua vida é ${suaVida} e a vida do Sequestrador é ${VidaDoSequestrador}`)
 
  do{
    alert(`Sua vida é ${suaVida} e a vida do Sequestrador é ${VidaDoSequestrador}. Ataque!`)
    let SuaSorte = rolarDado()
    alert(`Você tirou ${SuaSorte}! Agora é a vez do Sequestrador!`)
    let SorteDoSequestrador = rolarDado()
    if(SuaSorte> SorteDoSequestrador){
      VidaDoSequestrador -= 20
      alert(`O Sequestrador tirou ${SorteDoSequestrador}. Você invoca seu Cetro e lança um feitiço no Sequestrador, o cetro brilha a ponto de esquentar o local como um forno, o Sequestrador podia sentir o calor em sua pele até que percebe um tiro em sua direção,
      um flash que havia saido do Cetro acerta sua pele a queimando com uma queimadura de 3° grau no minímo. Agora o Sequestrador tem ${VidaDoSequestrador} de vida`)
    }
    else if(SuaSorte < SorteDoSequestrador){
      suaVida -= 20
      alert(`O Sequestrador tirou ${SorteDoSequestrador}. Ele cria diversas adagas feitas de pura lava, claramente era um naturalis renegado, capaz de controlar os elementos, tinha de tomar muito cuidado, assim que percebeu as adagas haviam fincado em sua pele
      a queimando e criando uma crosta da pedra esfriando, isso lhe deixa com os movimentos limitados e você tem ${suaVida} de vida.`)
    }
    else{
      alert(`Enquanto você invoca seu cetro, ele cria 100 adagas algumas de gelo e outras de lava, isso te deixa confuso pois não sabe se a temperatura em volta é do local ou das adagas que cancelam seus atributos de esquentar o espaço, isso faz com que desvie com menos
        facilidade, agora você e ele estão cansados porém nenhum dos dois recebeu nenhum ataque sucedido, Empate!`)
    }
  }
  while(suaVida >0 && VidaDoSequestrador >0)
  if(suaVida<= 0){
    alert(`O Sequestrador Ativa sua habilidade especial e em sua volta vinhas crescem do chão lhe enrolando e absorvendo você até que fique completamente enterrado no chão, deixando apenas sua cabeça para fora para veres o horror que ele faria, com seu poder
      ele cria outra adaga de lava e aproxima do pescoço de seu amado, ele dava uma gargalhada enquanto aquele que deveria estar ao seu lado durante a vida chorava de tristeza sabendo que nada poderia ser feito, tudo oque pode fazer foi olhar para ti com ternura
      e sussurrar entre os lábios para que não se sinta culpado, então o Sequestrador corta a garganta do amor de sua vida e logo depois termina de te enterrar, você morre com a triste lembrança de que ele morreu, aquele que sempre esteve com você foi embora
      dessa vida na sua frente e você não pôde fazer nada além de observar.`)
      return
  }
  else{
    alert(`Depois de muito tempo, você ativa sua habilidade especial e Invoca o poder mais poderoso que conhece, porém dessa vez é diferente, você sente uma força absurda capaz de explodir até mesmo o sol, você joga seu cetro para cima e ele se torna seu animal
      que o usa para lança-lo até o Sequestrador, a espada de ossos que seu inimigo derrotado havia usado surge em suas mãos, contudo os ossos se desfazem e se remontam em uma corrente, você parece saber usa-la mesmo sem treinamento, a arma parece ser feita para
      suas mão, tanto que quando ela é usada para envolver o inimigo tudo pareceu natural e quando percebeu ele já estava preso em meio as correntes que antes eram uma espada, ele gritava por socorro e você or misericórdia não o mata, mas o envia para o inferno das maldições.`)
    alert(`Agora que tudo passou você corre para Lucca(O garoto sequestrado) cortando suas correntes e o abraça, após tanto tempo longe ambos podem desfrutar da falta de espaço que há entre seus corpos e em meio a tanta felicidade ambos se beijam comemorando a jornada, enfim a aventura de nosso herói termina com seus felizes para sempre.
     
      Ou será que não...`)
  }
}
//************************************* Função que roda ao iniciar o jogo *************************************
function iniciar(){
  const cla = prompt(`Seja bem-vindo a "Curse School"!! Escolha um caminho:
    1 - Sortear Clã
    2 - Abandonar a escola`)
  switch(cla){
    case "1":
      claPrincipal = sortearCla()
      alert(`Seu sangue tem características do clã ${claPrincipal}`)
      matriculaEscolar()
    break
    case "2":
      alert(`Pois bem, você decidiu não seguir a vida de um amaldiçoado e sua maldição foi retirada por tempo limitado,
      para que tente uma vida normal até os 20 anos, após isso ela voltará`)
    break
    default:
      alert(`Você não contém uma maldião, portanto não tem acesso a Curse School`)
  }
}
//************************************* Função para sortear personagem ***********************************, **
function sortearCla() {
  const clas = ["｡ﾟ☠️・Sobretoure", "｡ﾟ👥・Modifiers", "｡ﾟ🍃・Naturalis", "｡ﾟ💠・Runnes", "｡ﾟ🦋・Artemors","｡ﾟ🪄・Magicians"];
 
  const escolhido = Math.floor(Math.random() * clas.length);
  return clas[escolhido];
}
// Função que inicia a história do Pato
function matriculaEscolar(){
  const nome = prompt("Escolha um nome para seu estudante!")
  alert(`${nome} do clã ${claPrincipal}, chega a escola após muito tempo de viagem, ele e seu namorado Lucca haviam sido convocados para a escola de maldições na semana passada, Lucca era um escolhido do clã de Modifiers e Sobretoure,
  enquanto eu apenas do clã de ${claPrincipal}, ao chegarmos o Diretor nos recebeu para nos apresentar a escola, foi um tempo super divertido e criamos ótimos laços com os outros alunos, tudo parecia perfeito, até que as nuvens lá fora
  começaram a ficar escuras e trovôes ressoaram nos céus, uma forte chuva assolou a academia e uma névoa densa e negra como a escuridou começou a invadir a escola, Lucca e eu ficamos assustados e demos as mãos, mas quando vi, parei de sentir
  a pele de Lucca, ele havia sumido e a névoa já estava se dissipando.`)
  const opcao1 = prompt(`Após tudo oque aconteceu você decide procurar o professor responsável de sua ala para decidir como procurar seus namorado, você encontra a professora 𝐕iolette 𝐏earl 𝐀mbrose, depois de explicar toda a situação ela lhe dá duas opções:
    1- Esperar e treinar durante 5 anos para ir atrás de seu namorado e tentar derrotar o inimigo.
    2- Ir atrás do seu amado e tentar a sorte. `)
  if(opcao1 == "1"){
    const rolarDados = confirm("Os dados irão definir o sucesso ou fracasso do seu treinamento")
    if(rolarDados === true){
      sorteioDado = rolarDado()
      alert(`O dado resultou em ${sorteioDado}!`)
      if(sorteioDado >= 0 && sorteioDado <= 10) {
        alert ( `Você iniciou seu treinamento e treinou duro por 2 anos, mas em uma missão de avalição para subir de ranking na escola, acaba morrendo para um dos monstros soltos na área.`)
        return
      }
      else if (sorteioDado >=11 && sorteioDado <=20 ){
        alert ( `Você treinou durante os 5 anos que precisava e alcançou o sucesso, agora é um amaldiçoado forte e capaz de enfrentar grandes monstros`)
        alert("Quando se preparava para a sua jornada e recuperar oque havia perdido, ele encontra o professor que segurava uma mochila pesada e grande, cheia de objetos esguios e longos, que logo descobriria oque era.")
        const proposta = prompt(`O diretor o para e lhe pede para ir com ele até seu escritório e você decide segui-lo, ele lhe apresenta alguns cajados e lhe propoem algo em especial, você aceitará??
        1 - Aceitar oque ele propôs!
        2 - Insultar o diretor por não fazer nada quando seu namorado foi rapitado
        3 - Recusar mas voltar a noite para roubar o que há em sua bolsa`)
        if(proposta== "1"){
          alert(`Você aceita a proposta do professor e escuta oque ele tem a falar.
          - "Claro, oque tem ai pra me ajudar nesse momento?"`)
          cetro()
        }
        else if(proposta == "2"){
          alert(`Você insulta e xinga o diretor, ao bater na mochila do mesmo você percebe 5 cetrôs nela que voam da mochila e batem na parede do escritório,
          tudo começa a tremer e algumas rachaduras começam a se formar na estrutura da escola, o poder do cetro abalou as paredes, que tremeram tanto ao ponto
          de derrubar uma estante que havia na sala sob você, o levando a obito na hora.`)
          return
        }
        else{
          alert(`Você recusa educadamente e a noite volta para roubar a mochila do diretor, ao chegar lá percebe que ela sumiu, oque é bem frustante no final, enfim decide voltar,
          mas ao se virar para sair, encontra o reitor o esperando na porta.
          -"Pensando em roubar minha sala ${nome}?"
          -"Claro que não, apenas procurando o banheiro?" - Eu disse sem nenhuma confiança parecendo mais uma pergunta do que respostas.
          -"Tudo o que precisava fazer era aceitar minha proposta. Então ele estende a mochila."`)
          cetro()
        }
      }
    }
    else{
      alert("Você não consegue ir tão longe e nos primeiros dois meses acaba indo a óbito devido ao treinamento pesado da professora.")
    }
  }
  else {
    alert(`Você foi atrás dele sem nenhum treinamento e morreu no primeiro obstáculo que encontrou.`)
    return
  }
}
has context menu
