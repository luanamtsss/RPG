//************************************* Variáveis globais que devem ser inicializadas no início do jogo *************************************
// variável que irá guardar o personagem sorteado
let personagemPrincipal = "";
// variável que irá guardar o número sorteado no dado
let sorteioDado = 0;
// variável que irá guardar a consequência de cada número sorteado no desafio da montanha
const consequenciasMontanha = [
   'Você encontrou um dragão feroz! Prepare-se para a batalha!',
   'Você encontrou um grupo de criaturas místicas e deve enfrentá-las.',
   'Você passou pela montanha sem nenhum problema!'
];
//************************************* Funções que serão repetidas ao longo do jogo *************************************
// Função para rolar um dado (1 a 20)
function rolarDado() {
   return Math.floor(Math.random() * 20) + 1;
}
// Função para batalha de nível fácil
function batalhaFacil() {
   let vidaPersonagem = 10;
   let vidaInimigo = 5;
   while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
       alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`);
       let numeroSorteadoPersonagem = rolarDado();
       alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
       let numeroSorteadoInimigo = rolarDado();
       if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
           vidaInimigo -= 2;
           alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora a vida dele é ${vidaInimigo}`);
       } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
           vidaPersonagem -= 2;
           alert(`O inimigo tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`);
       } else {
           alert("Empate! Nada acontece.");
       }
   }
   if (vidaPersonagem <= 0) {
       alert("Você perdeu! O jogo acabou.");
   } else {
       alert("Você venceu! Agora a história continua....");
   }
}
// Função para batalha de nível médio
function batalhaMedia() {
   let vidaPersonagem = 10;
   let vidaInimigo = 10;
   alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`);
   while (vidaPersonagem >= 0 && vidaInimigo >= 0) {
       alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`);
       let numeroSorteadoPersonagem = rolarDado();
       alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`);
       let numeroSorteadoInimigo = rolarDado();
       if (numeroSorteadoPersonagem > numeroSorteadoInimigo) {
           vidaInimigo -= 2;
           alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora a vida dele é ${vidaInimigo}`);
       } else if (numeroSorteadoPersonagem < numeroSorteadoInimigo) {
           vidaPersonagem -= 2;
           alert(`O inimigo tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`);
       } else {
           alert("Empate! Nada acontece.");
       }
   }
   if (vidaPersonagem <= 0) {
       alert("Você perdeu! O jogo acabou.");
   } else {
       alert("Você venceu! Agora a história continua....");
   }
}
//************************************* Função que roda ao iniciar o jogo *************************************
function iniciar() {
   const personagem = prompt(`Seja bem-vindo! Escolha uma das opções:
       1 - Sortear Personagem
       2 - Sair do Jogo`);
   switch (personagem) {
       case "1":
           personagemPrincipal = sortearPersonagem();
           alert(`O personagem sorteado foi ${personagemPrincipal}`);
           if (personagemPrincipal === "Princesa")
               iniciarJornadaPrincesa();
           else if (personagemPrincipal === "Bruxa")
               iniciarJornadaBruxa();
           else
               iniciarJornadaCavaleiro();
           break;
       case "2":
           alert("Espero te ver novamente!");
           break;
       default:
           alert("Isso não é uma opção! Recomece do zero!");
   }
}
//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
   const personagens = ["Princesa", "Bruxa", "Cavaleiro"];
   const sorteado = Math.floor(Math.random() * personagens.length);
   return personagens[sorteado];
}
//************************************* Funções para jornada de cada personagem *************************************
// Função para iniciar a jornada da princesa
function iniciarJornadaPrincesa() {
   const opcao1 = prompt(`Você está em frente a uma montanha sombria, que tem uma carverna assustadora. O que você faz?
       1 - Entro na montanha para explorar
       2 - Sigo o caminho até o topo da montanha`);
   if (opcao1 == "1") {
       const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?");
       if (rolarDados === true) {
           sorteioDado = rolarDado();
           alert(`O número sorteado foi ${sorteioDado}!`);
           if (sorteioDado >= 0 && sorteioDado <= 7) {
               alert(`${consequenciasMontanha[0]}`);
               batalhaMedia();
           } else if (sorteioDado >= 8 && sorteioDado <= 14) {
               alert(`${consequenciasMontanha[1]}`);
               batalhaFacil();
           } else {
               alert(`${consequenciasMontanha[2]}`);
           }
       } else {
           alert(`Se ainda não está preparado, volte mais tarde.`);
           return;
       }
   } else {
       alert(`Você decidiu seguir o caminho até o topo da montanha.`);
       // Adicione mais lógica para a jornada até o topo aqui, se desejar.
       alert("Você chegou ao topo e avistou o dragão!");
       return;
   }
}
// Função para iniciar a jornada da bruxa
function iniciarJornadaBruxa() {
   const opcao1 = prompt(`Você está em frente a uma montanha sombria. O que você faz?
       1 - Entro na montanha para explorar
       2 - Sigo o caminho até o topo da montanha`);
   if (opcao1 == "1") {
       const rolarDados = confirm("Agora vamos ver a sua sorte! Preparado para rolar os dados?");
       if (rolarDados === true) {
           sorteioDado = rolarDado();
           alert(`O número sorteado foi ${sorteioDado}!`);
           if (sorteioDado >= 0 && sorteioDado <= 7) {
               alert(`${consequenciasMontanha[0]}`);
               batalhaMedia();
           } else if (sorteioDado >= 8 && sorteioDado <= 14) {
               alert(`${consequenciasMontanha[1]}`);
               batalhaFacil();
           } else {
               alert(`${consequenciasMontanha[2]}`);
           }
       } else {
           alert(`Se ainda não está preparado, volte mais tarde.`);
           return;
       }
   } else {
       alert(`Você decidiu seguir o caminho até o topo da montanha.`);
       // Adicione mais lógica para a jornada até o topo aqui, se desejar.
       alert("Você chegou ao topo e avistou o dragão!");
       return;
   }
}
// Função para iniciar a jornada do cavaleiro
function iniciarJornadaCavaleiro() {
   const opcao1 = prompt(`Você está em frente a uma montanha sombria. O que você faz?
       1 - Entro na montanha para explorar
       2 - Sigo o caminho até o topo da montanha`);
   if (opcao1 == "1") {
       const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?");
       if (rolarDados === true) {
           sorteioDado = rolarDado();
           alert(`O número sorteado foi ${sorteioDado}!`);
           if (sorteioDado >= 0 && sorteioDado <= 7) {
               alert(`${consequenciasMontanha[0]}`);
               batalhaMedia();
           } else if (sorteioDado >= 8 && sorteioDado <= 14) {
               alert(`${consequenciasMontanha[1]}`);
               batalhaFacil();
           } else {
               alert(`${consequenciasMontanha[2]}`);
           }
       } else {
           alert(`Se ainda não está preparado, volte mais tarde.`);
           return;
       }
   } else {
       alert(`Você decidiu seguir o caminho até o topo da montanha.`);
      
               alert("Você chegou ao topo e avistou o dragão!");
       // Adicione lógica adicional para o que acontece ao encontrar o dragão
       const enfrentarDragao = confirm("O dragão está à sua frente. Você deseja enfrentá-lo?");
       if (enfrentarDragao) {
           // Aqui você pode adicionar uma batalha com o dragão, se desejar
           alert("Você se preparou para a batalha contra o dragão!");
           const resultadoBatalha = rolarDado();
           if (resultadoBatalha > 10) {
               alert("Você venceu o dragão e salvou o reino!");
           } else {
               alert("O dragão foi muito forte! Você não conseguiu vencer.");
           }
       } else {
           alert("Você decidiu não enfrentar o dragão e voltou.");
       }
       return;
   }
}