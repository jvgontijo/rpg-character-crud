# RPG Character CRUD
Este projeto é uma aplicação de CRUD (Create, Read, Update, Delete) para gerenciar personagens de RPG. Ele utiliza o React no frontend, Redux para gerenciamento de estado, Material UI para a interface e Json Server para simular uma API backend. A aplicação permite adicionar, editar, listar e excluir personagens, além de mostrar seus detalhes como nome, idade, raça, alinhamento, e mais.

# Funcionalidades
**Listagem de Personagens:** Exibe todos os personagens cadastrados, com detalhes como nome, raça, alinhamento, idade, etc.  
**Adicionar Personagem:** Permite adicionar novos personagens ao sistema.  
**Editar Personagem:** Possibilita editar os dados de um personagem já existente.  
**Excluir Personagem:** Remove um personagem da lista e do banco de dados (simulado com o Json Server).  

## Tecnologias
**Frontend:** React, Redux, React Router, Material UI  
**Gerenciamento de Estado:** Redux Toolkit  
**Simulação de API:** Json Server (para simular um backend local)  
**Estilização:** Material UI e customizações com CSS  

## Instalação

### Pré-requisitos
**Node.js:** Certifique-se de que o Node.js está instalado. Se não, instale a partir de https://nodejs.org/.
**npm:** O gerenciador de pacotes npm deve estar instalado.

#### Passos para rodar o projeto
Clone o repositório:
`git clone https://github.com/seu-usuario/rpg-character-crud.git`

Navegue até o diretório do projeto:
`cd rpg-character-crud`

Instale as dependências:
`npm install`

Instale o Json Server para simular a API (caso ainda não tenha): 
`npm install -g json-server`

Crie um arquivo db.json na raiz do projeto com o conteúdo inicial para os personagens:

{
  "characters": [
    {
      "id": 1,
      "name": "John",
      "age": 25,
      "race": "Human",
      "alignment": "Neutral Good",
      "eyeColor": "Blue",
      "skinColor": "Light",
      "hairColor": "Brown",
      "height": "5'9",
      "weight": 160,
      "equipment": [
        "Sword",
        "Shield"
      ]
    }
  ]
}

Inicie o Json Server para rodar a API local:
`json-server --watch db.json --port 5000`

Inicie o servidor de desenvolvimento do React:
`npm start`

O Json Server e o servidor do React podem ser rodados em conjunto utilizando concurrently pelo comando adicionado no package.json:
`npm run dev`

O projeto estará disponível em http://localhost:3000.

### Estrutura de Pastas
A estrutura de pastas do projeto está organizada da seguinte forma:  

/src  
  /components      # Componentes reutilizáveis como formulário de adição/  edição, listagem de personagens, etc.  
  /redux           # Gerenciamento de estado com Redux Toolkit  
  /App.js          # Componente principal que gerencia as   
  /index.js        # Ponto de entrada da aplicação

### Como Funciona
#### Redux
**Store:** O estado global da aplicação é gerenciado pelo Redux. A lista de personagens é armazenada no estado e manipulada por ações como fetchCharacters, addCharacter, updateCharacter e deleteCharacter.
**Slice:** Utiliza o createSlice do Redux Toolkit para definir os reducers e ações de forma simples e concisa.
**Async Thunks:** As operações assíncronas (como chamadas à API simulada com Json Server) são tratadas com createAsyncThunk para simplificar a lógica de requisições.

#### Funcionalidade de CRUD
**Adicionar Personagem:** O formulário de adição permite inserir um novo personagem, que é enviado para o servidor e adicionado à lista.
**Editar Personagem:** Ao clicar no botão "Editar", o formulário de adição é preenchido com os dados do personagem selecionado, permitindo que você faça alterações e as salve.
**Excluir Personagem:** Ao clicar em "Excluir", o personagem é removido tanto do estado local quanto do banco de dados (simulado).
**Listagem:** A lista de personagens é carregada e exibida em uma tabela, com todos os detalhes do personagem e botões para editar ou excluir.