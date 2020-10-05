# Projeto de pedidos

<b> Demonstração: </b> <a>https://order--app.herokuapp.com/</a>
<br/>
<b> Login: </b> `email: maria@gmail.com` | `senha: 123`

<br>

<b> Funcionalidades e tecnologias </b>

- Cadastro de pessoas físicas
- Cadastro de produtos
- Cadastro de pedidos
- Login com JWT e Spring Security
- Spring Boot
- Angular 8 - TypeScript
- API Swagger (http://localhost:8080/api/swagger-ui.html ou https://order--api.herokuapp.com/api/swagger-ui.html)
- QueryDSL 
- ID único do tipo UUID
- Java 8
- Maven 
- JPA 
- Testes unitários e testes de integração
- Padrão de projeto Builder com Generics
- Banco de dados PostgreSQL
- Bean Validation
- REST com JSON 
- ControllerAdvice (NOT_FOUND, BAD_REQUEST, UNPROCESSABLE_ENTITY, FORBIDDEN)

<br/>

<b> Para executar o projeto completo: </b>
- Clone: <a>https://github.com/fernandopavan/project-order-compose</a> 
- Após clonar este repositório em computador, execute esse comando no terminal `docker-compose up` dentro do diretório do projeto.
- <b>Obs.:</b> é necessário ter o docker (19.03.8) instalado no seu computador.
- No navegador, digite a seguinte URL: <a>http://localhost:9000/</a>

<br/>

<b> Para rodar somente o front-end: </b>
- Clone este repositório: <a>https://github.com/fernandopavan/order-front</a> 
- Execute os seguintes comandos na raiz do projeto: `npm install` `npm start`
- <b>Obs.:</b> é necessário ter o `node: v13.12.0` e o `npm: 6.14.4` instalado no seu computador.

<br/>

<b> Para rodar somente o back-end: </b>
- Clone este repositório: <a>https://github.com/fernandopavan/order-api</a> 
- Execute os seguintes comandos na raiz do projeto: `mvn instal` `java -jar target/nome_projeto.jar`
- Criar e configurar o banco de dados Postgres (localhost:5432): `usuario=order_owner` | `senha=123456` | `banco=projeto_order`
- <b>Obs.:</b> é necessário ter o Java instalado no seu computador.

<br/>

<b>Dúvidas:</b>
<br/>
`email: fernando.pavan@outlook.com`
