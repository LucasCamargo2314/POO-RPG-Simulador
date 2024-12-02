// import { DAO } from "../DAO/DAO";
// import { DAO } from "../DAO/DAO";

export interface DAO<T> {
  salvar(objeto: T): T;
  remover(idObjeto: number): void;
  listar(): T[];
  atualizar(objeto: T): T;
}

export abstract class Personagem implements DAO<Personagem> {
  constructor(
    protected _nome: string,
    protected _forca: number,
    protected _habilidadeMental: number,
    protected _poderDeAtaque: number,
    protected _esquiva: number,
    protected _resistencia: number,
    protected _vidaAtual: number,
    protected _vidaMaxima: number
  ) {}
  
  public abstract atacar(personagem: Personagem): void;

  public abstract contraAtacar(personagem: Personagem): void;

  public abstract aprimorarHabilidadePrincipal(): void;

  public abstract regenerarVida(): void;

  // Métodos de CRUD (declarados mas não implementados)
  salvar<Personagem>(objetoTo: Personagem): Personagem {
    throw new Error("Method not implemented.");
  }
  remover(idObjeto: number): void {
    throw new Error("Method not implemented.");
  }
  listar(): Personagem[] {
    throw new Error("Method not implemented.");
  }
  atualizar(objeto: Personagem): Personagem {
    throw new Error("Method not implemented.");
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
  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public set vidaAtual(vidaAtual: number) {
    this._vidaAtual = vidaAtual;
  }
  public resumo(): string {
    return `${this._nome}: ${this._vidaAtual.toFixed(1)}/${this._vidaMaxima}`;
  }
}


// Implementação de Personagem Concreto: Mago
export class PersonagemMago extends Personagem {
  public atacar(personagem: Personagem): void {
    console.log(`${this._nome} lança uma magia contra ${personagem.nome}`);
  }

  public contraAtacar(personagem: Personagem): void {
    console.log(`${this._nome} se protege com um feitiço de defesa!`);
  }

  public aprimorarHabilidadePrincipal(): void {
    console.log(`${this._nome} aprimora sua magia!`);
  }

  public regenerarVida(): void {
    this._vidaAtual += 20;
    console.log(`${this._nome} regenera 20 pontos de vida.`);
  }
}

export class PersonagemGuerreiro extends Personagem implements Clonar {
  public atacar(personagem: Personagem): void {
    console.log(`${this._nome} ataca com sua espada contra ${personagem.nome}`);
  }

  public contraAtacar(personagem: Personagem): void {
    console.log(`${this._nome} contra-ataca com um golpe feroz!`);
  }

  public aprimorarHabilidadePrincipal(): void {
    console.log(`${this._nome} aprimora sua força!`);
  }

  public regenerarVida(): void {
    this._vidaAtual += 15;
    console.log(`${this._nome} regenera 15 pontos de vida.`);
  }

  clone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
}
}


export class PersonagemFactory {
  public static criarPersonagem(tipo: string, nome: string): Personagem {
    if (tipo === "mago") {
      return new PersonagemMago(nome, 10, 20, 50, 5, 30, 100, 100);
    } else if (tipo === "guerreiro") {
      return new PersonagemGuerreiro(nome, 20, 15, 70, 10, 40, 120, 120);
    } else {
      throw new Error("Tipo de personagem desconhecido");
    }
  }
}

// Código cliente
const personagem1 = PersonagemFactory.criarPersonagem("mago", "Merlin");
const personagem2 = PersonagemFactory.criarPersonagem("guerreiro", "Arthur");

console.log(personagem1.resumo());
personagem1.atacar(personagem2);

console.log(personagem2.resumo());
personagem2.atacar(personagem1);


//--------------------------------------------

interface Clonar {
    clone(): this;
}



    

// Método de clonagem
    


// Classe Guerreiro estendendo Personagem
// class Guerreiro extends Personagem {
//     // Implementações específicas do Guerreiro
// }

// Criação de um protótipo de Guerreiro
const guerreiroPrototype = new PersonagemGuerreiro("Ygor", 100, 50, 75, 30, 80, 100, 100);

// Clonando o protótipo para criar novos guerreiros
const guerreiro1 = guerreiroPrototype.clone();
guerreiro1.nome = "Ygor";

const guerreiro2 = guerreiroPrototype.clone();
guerreiro2.nome= "Lucas";
