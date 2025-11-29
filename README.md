API de Gerenciamento de Jogos

Este projeto consiste no desenvolvimento de uma API para controle de jogos eletrônicos, permitindo o cadastro, listagem, atualização e remoção de registros.
A API foi construída utilizando Node.js, Express e Supabase como banco de dados.
Também acompanha uma interface simples em HTML para teste das rotas.

Funcionalidades da API

A API oferece os seguintes recursos:

1. Listar todos os jogos

Rota: GET /api/jogos

Retorna todos os registros salvos no banco de dados.

2. Buscar um jogo por ID

Rota: GET /api/jogos/:id

Retorna apenas o jogo correspondente ao ID informado.

3. Criar um novo jogo

Rota: POST /api/jogos

Corpo esperado (JSON):

{
  "title": "Nome do jogo",
  "platform": "Plataforma",
  "hours_played": 10,
  "finished_at": "2025-01-01"
}

4. Atualizar um jogo existente

Rota: PUT /api/jogos/:id

5. Excluir um jogo

Rota: DELETE /api/jogos/:id

Tecnologias Utilizadas

Node.js

Express

Supabase

JavaScript ES Modules (import/export)

Render para deploy

HTML e JavaScript para testes da API

Estrutura de Pastas
/
├── index.js               (inicializa o servidor)
├── app.js                 (configuração principal do Express)
├── src/
│   ├── routes/
│   │   └── games.js       (rotas da API)
│   ├── controllers/
│   │   └── gamesController.js
│   └── services/
│       └── supabase.js    (conexão com o banco)
└── public/
    └── index.html         (página de testes)

Configuração do Ambiente
1. Instale as dependências
npm install

2. Configure as variáveis do Supabase

Crie um arquivo .env com:

SUPABASE_URL=URL_DO_SUPABASE
SUPABASE_KEY=CHAVE_DO_SUPABASE

3. Execute o projeto
npm start


O servidor iniciará em:

http://localhost:3000

Banco de Dados

A API utiliza uma tabela chamada games contendo as seguintes colunas:

Campo	Tipo	Descrição
id	int (auto)	Identificador do jogo
title	text	Nome do jogo
platform	text	Plataforma (PC, PS5 etc.)
hours_played	int	Horas jogadas
finished_at	date	Data de término opcional
Página de Testes

O projeto inclui um arquivo index.html dentro da pasta public.
Ele permite testar todas as rotas da API sem necessidade de ferramentas externas.

Basta abrir o arquivo no navegador e informar o endereço da API hospedada no Render.

Deploy

O deploy foi realizado na plataforma Render.
Para isso foi necessário:

Configurar o Node.js para ES Modules

Definir npm start como comando inicial

Garantir que o servidor escute process.env.PORT
