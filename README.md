# Desafio Coteminas (Frontend)

## Tecnologias Utilizadas

- React
- TypeScript
- Styled Components
- Eslint
- Prettier

## Requisitos para executar o projeto

Para executar o projeto, será necessário ter os seguintes requisitos: 
- Nodejs 
- Yarn

## Configuração do projeto

### Passo 1 - Baixar as dependencias do projeto:

  Execute o seguinte comando:

```
  yarn install
``` 

### Passo 2 - Configurar variáveis de ambiente:
 
 Renomear o arquio `.env.example` para `.env`. Este arquivo contem as variáveis de ambiente necessárias para executar o projeto. Entre elas temos:

 - `DATABASE_URL`: onde você passará a configuração do seu banco de dados. `postgres://{username}:{password}@{host}:{port}/{database}`. Renomei os variáveis pelas do seu banco.

 - `NODE_ENV`: para controlar o ambiente da aplicação se estará em `development`(desenvolvimento) ou `production`(produção). Por padrão deixe em `development`.

 - `REACT_APP_API_URL`: url da api para realizarmos a comunicação do frontend com o backend . Por padrão deixe em `http://localhost:3333`.

### Passo 3 - Executando o Projeto:

 Dando tudo certo nos passos anteriores, basta executar o seguinte comando:

```
  yarn start
``` 

A aplicação subirá na seguinte url: [http://localhost:3000](http://localhost:3000)