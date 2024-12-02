import { Personagem } from "./Personagem_ComFactory";
// Interface Clonar
interface Clonar {
    clone(): this;
}

// Classe Personagem implementando a interface Clonar
class Guerreiro implements Clonar {
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

    

// Método de clonagem
    clone(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

// Classe Guerreiro estendendo Personagem
// class Guerreiro extends Personagem {
//     // Implementações específicas do Guerreiro
// }

// Criação de um protótipo de Guerreiro
const guerreiroPrototype = new Guerreiro("Ygor", 100, 50, 75, 30, 80, 100, 100);

// Clonando o protótipo para criar novos guerreiros
const guerreiro1 = guerreiroPrototype.clone();
guerreiro1._nome = "Ygor";

const guerreiro2 = guerreiroPrototype.clone();
guerreiro2._nome= "Lucas";
