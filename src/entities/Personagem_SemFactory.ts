import { Util } from "../helpers/Util";

// Personagem Guerreiro sem herança
export class Guerreiro {
  private _nome: string;
  private _forca: number;
  private _habilidadeMental: number;
  private _poderDeAtaque: number;
  private _esquiva: number;
  private _resistencia: number;
  private _vidaAtual: number;
  private _vidaMaxima: number;

  constructor(nome: string) {
    this._nome = nome + " Warrior";
    this._forca = Util.randomizar(1, 1000);
    this._habilidadeMental = 0;
    this._poderDeAtaque = 0;
    this._esquiva = Util.randomizar(0, 50);
    this._resistencia = Util.randomizar(0, 90);
    this._vidaMaxima = Util.randomizar(1, 40_000);
    this._vidaAtual = this._vidaMaxima;

    this._poderDeAtaque = this._forca * 10;
  }

  public atacar(oponente: Guerreiro): void {
    console.log(`${this._nome} atacou ${oponente.nome}`);
    this.ataque(oponente);
    oponente.contraAtacar(this);
  }

  public contraAtacar(oponente: Guerreiro): void {
    console.log(`${this._nome} contra-atacou ${oponente.nome}`);
    this.ataque(oponente);
  }

  public aprimorarHabilidadePrincipal(): void {
    this._forca *= 1.1;
    this.atualizarPoderDeAtaque();
  }

  private atualizarPoderDeAtaque(): void {
    this._poderDeAtaque = this._forca * 10;
  }

  public regenerarVida(): void {
    this._vidaAtual += this._vidaMaxima * 0.1;
    if (this._vidaAtual > this._vidaMaxima) {
      this._vidaAtual = this._vidaMaxima;
    }
  }

  private ataque(oponente: Guerreiro): void {
    const acertou: boolean = Util.randomizar(0, 100) > oponente.esquiva;
    if (acertou) {
      const danoCausado: number =
        (1 - oponente.resistencia / 100) * this._poderDeAtaque;
      oponente.vidaAtual = oponente.vidaAtual - danoCausado;

      const oponenteMorreu: boolean = oponente.vidaAtual <= 0;
      if (oponenteMorreu) {
        throw new Error(`${oponente.nome} foi derrotado.`);
      }
    } else {
      console.log(`${oponente.nome} esquivou o ataque de ${this._nome}`);
    }
  }

  // Getters e Setters
  public get nome(): string {
    return this._nome;
  }

  public get esquiva(): number {
    return this._esquiva;
  }

  public get vidaAtual(): number {
    return this._vidaAtual;
  }

  public get poderDeAtaque(): number {
    return this._poderDeAtaque;
  }

  public get resistencia(): number {
    return this._resistencia;
  }

  public set vidaAtual(vidaAtual: number) {
    this._vidaAtual = vidaAtual;
  }

  public resumo(): string {
    return `${this._nome}: ${this._vidaAtual.toFixed(1)}/${this._vidaMaxima}`;
  }
}

// Usando a classe Guerreiro
const guerreiro1 = new Guerreiro("Arthur");
const guerreiro2 = new Guerreiro("Lancelot");

console.log(guerreiro1.resumo());
console.log(guerreiro2.resumo());

guerreiro1.atacar(guerreiro2);
