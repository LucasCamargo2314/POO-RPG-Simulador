import prompt from "prompt-sync";
import { Guerreiro } from "./entities/Guerreiro";
import { Priest } from "./entities/Padre";
import { Personagem } from "./entities/Personagem";
import { Util } from "./helpers/Util";

const teclado = prompt();

let personagens: Personagem[] = [];
personagens.push(new Priest("Fábio de Melo"));
personagens.push(new Guerreiro("Ragnar"));
personagens.push(new Priest("Quemedo"));
personagens.push(new Guerreiro("Genghis Khan"));
personagens.push(new Guerreiro("Alexandre, o Grande"));

while (true) {
  console.log(`===== Personagens vivos (${personagens.length}) =====`);
  personagens.forEach((personagem) => console.log(personagem.resumo()));
  if (personagens.length === 1) {
    break;
  }
  console.log("=============================\n");

  teclado("Tecle ENTER para rodar o próximo round\n");
  try {
    const atacantePosicao = Util.randomizar(0, personagens.length - 1);
    const atacadoPosicao = Util.randomizar(0, personagens.length - 1);
    if (atacantePosicao != atacadoPosicao) {
      const atacante = personagens[atacantePosicao];
      const atacado = personagens[atacadoPosicao];
      atacante.atacar(atacado);
      console.log(atacante.resumo());
      console.log(atacado.resumo());
      console.log("\n");
      console.log(".".repeat(20));
    }
  } catch (e) {
    personagens = personagens.filter((personagem) => personagem.vidaAtual > 0);
    console.log((e as any).message);
  }
}
console.log(`\nO vencedor foi \x1b[31m ${personagens[0].nome}\x1b[0m`);
