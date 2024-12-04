# POO-RPG-Simulador

Readme:

🛡️ Padrão de Projeto: Prototype
🔐 Pré-requisitos
Node.js
TypeScript

Padrão Factory Method
Passos a serem seguidos:
Passo 01: Introdução ao padrão Factory Method e seus contextos de aplicação.
Passo 02: Implementação de uma fábrica de criação de objetos em TypeScript.
Passo 03: Refatorando a criação de personagens no projeto POO-RPG-Simulador usando Factory Method.
Passo 04: Aplicação prática do padrão Factory Method para simplificar a criação de instâncias e promover a flexibilidade do código.
⚙️ Executando o Projeto

🔍 Sobre o Trabalho
Este projeto demonstra o uso do padrão Factory Method para simplificar a criação de objetos no projeto POO-RPG-Simulador. Ao utilizar uma fábrica para criar instâncias de diferentes tipos de personagens, o padrão promove flexibilidade, mantendo o código limpo e desacoplado. O Factory Method permite que a criação de objetos seja delegada a classes especializadas, sem que o código cliente precise conhecer os detalhes de como essas instâncias são criadas.

Implementação do Padrão Factory Method:
O padrão Factory Method foi implementado na classe PersonagemFactory (arquivo src/Personagem_ComFactory.ts), que centraliza a criação de objetos do tipo Personagem. Dependendo do tipo de Personagem solicitado, a fábrica cria uma instância de Guerreiro ou Mago.
A classe Personagem é uma classe abstrata que define um contrato para suas subclasses, como PersonagemGuerreiro e PersonagemMago, e cada uma delas implementa o método criarPersonagem de maneira específica.
A fábrica PersonagemFactory oferece uma interface única para criar Personagens, sem expor a lógica de instância dos mesmos para o código cliente.

Padrão Prototype
Passos a serem seguidos:
Passo 01: Introdução ao padrão Prototype e seus contextos de aplicação.
Passo 02: Implementação de clonagem superficial e profunda em TypeScript.
Passo 03: Refatorando a criação de personagens no projeto POO-RPG-Simulador.
Passo 04: Aplicação prática do padrão Prototype para melhorar a eficiência e a reutilização no código.
⚙️ Executando o Projeto

🔍 Sobre o Trabalho
Este projeto demonstra o uso do padrão Prototype para simplificar a criação de objetos no projeto POO-RPG-Simulador. A abordagem melhora a reutilização de código e reduz a redundância na criação de personagens.

Implementação do Padrão Prototype
O método clone() foi implementado na classe Personagem (arquivo src/Personagens.ts).
A interface Clonar define a assinatura do método clone(), garantindo consistência em todos os objetos clonáveis.
Subclasses como Guerreiro reutilizam a funcionalidade de clonagem da classe base, permitindo personalizações específicas.

Link do video de apresentação - https://drive.google.com/file/d/1qnDRAGBzzOk4Jl7rhcgzy2vtW0PQlawf/view?usp=sharing

🤝 Contribuidores
<a href="https://https://github.com/Ygor0508"><img src="https://github.com/Ygor0508.png" width="45" height="45"></a> &nbsp;
<a href="https://https://github.com/LucasCamargo2314"><img src="https://github.com/LucasCamargo2314.png" width="45" height="45"></a> &nbsp;

