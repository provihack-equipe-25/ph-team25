#### ph-team-25

Projeto do hackathon Provihack do Agora promovido pela Provi

# TryAgain

TryAgain é uma plataforma que conecta empresas em prol de uma causa única: reciclagem de produtos têxteis visando otimizar o uso de materiais já existentes e minimizando as consequências climáticas da fabricação de novos produtos. 
O usuário pode cadastrar sua empresa, os materiais que ela descarta e os que ela precisa, bem como publicar anúncios de materiais e adquirir materiais de outras empresas.  

# Identidade visual

![logowhite](https://user-images.githubusercontent.com/90166189/166166449-0590aa1f-7f15-4877-8235-c81f9d54969c.png)
![logoblack](https://user-images.githubusercontent.com/90166189/166166487-b901d8b2-a015-4a20-8a2a-f0b5fae32190.png)
![appsymbol](https://user-images.githubusercontent.com/90166189/166166494-dd319357-e2f0-4b09-bca6-eeebed3a1481.png)


# Deploy

http://tryagain-25.surge.sh/

## 🚀 Começando

### 📋 Pré-requisitos

Para instalar a aplicação é necessário ter instalado na sua máquina

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en/)

### 🔧 Instalação

Para rodar o projeto execute os comandos abaixo no seu terminal:

Para copiar o projeto 
`git clone https://github.com/provihack-equipe-25/ph-team25.git`

Para rodar o back-end entre na pasta do projeto "ph-team25" e execute:

* `cd server`
* `npm install`
* `npm start`

Para rodar o front-end abra outra janela de terminal no diretório raiz do projeto e execute:

* `cd team25`
* `npm install`
* `npm start` 

## 📄 Documentação da API
https://documenter.getpostman.com/view/19294478/UyrGBu2E

## 🛠️ Construído com

O projeto foi criado com as seguintes tecnologias

* [NodeJs](https://nodejs.org/en/) - Usado para o back-end da aplicação;
* [Express](https://expressjs.com/) - Usado para construir a API da aplicação;
* [ReactJs](https://pt-br.reactjs.org) - Framework usado para o front-end da aplicação;
* [Styled components](https://styled-components.com/) - Ferramenta de componentização de estilos;
* [React router DOM](https://www.npmjs.com/package/react-router-dom) - Ferramenta que possui atalhos para utilizar React Router em aplicações web;
* [React hook form](https://react-hook-form.com/) - Gerenciador e otimizador de formulários;
* [UUID](https://www.npmjs.com/package/uuid) - Gerador de identificadores únicos;
* [Bcryptjs](https://www.npmjs.com/package/bcrypt) - Hasheador de senhas para inserção segura no banco de dados;
* [Yup](https://www.npmjs.com/package/yup) - Ferramenta de verificação de autenticação do usuário;
* [Git](https://git-scm.com/) - Ferramenta de versionamento;
* [MySql](https://www.mysql.com) - Banco de dados usado para aplicação;
* [Knex](http://knexjs.org/) - Ferramenta que possibilita integração de JavaScript com MySQL e
* [Heroku](https://www.heroku.com) - Usado para hospedagem do back-end do projeto

Por ser um produto baseado na web, decidimos utilizar o framework React.js no frontend, por possuir ferramentas robustas de controle de inputs, ser performático e eficiente, além de permitir uma velocidade maior no desenvolvimento. Utilizamos a biblioteca Styled Components para pré-processamento das planilhas de estilo, por ter um uso rápido, sintaxe simples, permitir componentização e ser performática. O deploy foi feito utilizando Surge, por estar disponível dentro do NPM e sem necessidade de configuração.
Para desenvolvimento do backend, foram utilizados Node.js, com a tipagem do TypeScript para garantir manutenção fácil do código, e ajuda das bibliotecas Knex e Express.js para manipulação do banco de dados e da API do projeto. Como modificadores de dados, utilizamos UUID para gerar id's únicos no padrão universal e Bcryptjs para hashear as senhas cadastradas no banco de dados. Utilizamos o MySQL como escolha para o banco de dados, por permitir uma boa agilidade em uma aplicação simples com tabelas relacionais. O deploy, tanto da database quanto do servidor, foi feito usando o Heroku - pelo deploy ser baseado em Git, é bem simples de ser implementado e possibilita manutenção com rapidez e segurança.
Assim, as escolhas de tecnologia foram baseadas em performance, agilidade e segurança, nos possibilitando atingir um bom equilíbrio e relacionamento entre as stacks escolhidas.
 
## ✒️ Autores

### Desenvolvimento
* **Leo Rigotto** - *Front-End* - ([Github](www.github.com/larrygotto), [Linkedin](https://www.linkedin.com/in/leorigotto/))
* **Luiz Pombo** - *Front-End* - ([Github](https://github.com/LuizPombo), [Linkedin](https://www.linkedin.com/in/luiz-pombo/))
* **Lucas Pasche** - *Back-End* - ([Github](https://github.com/llpasche), [Linkedin](https://www.linkedin.com/in/lucas-pasche/))

### Pesquisa de UX e prototipação do Design
* **João Marcos Maracaipe** - *UX/UI design JR* - ([Behance](behance.net/jmaracaipe), [Linkedin](https://www.linkedin.com/in/jmaracaipe/))
* **Jocieli Araújo** - *UX JR* - ([Medium](https://medium.com/@jocieli.arasilva/vigia-grana-aprimorando-a-gest%C3%A3o-financeira-pessoal-dc2f2c7c70c2), [Linkedin](https://www.linkedin.com/in/jocieli-ara%C3%BAjo-329a7628/))
* **Sandy Lima** - *UX/UI design JR* - ([Medium](https://medium.com/@sandylimas), [Notion](https://sandylima.notion.site/Bem-vind-a420320ee7c74abdaeb76e2019db9b2d), [Linkedin](https://www.linkedin.com/in/sandylima/))

### PM (Product manager)
* **Mariana Andrade** - [Linkedin](https://www.linkedin.com/in/marianaandraderj/)
