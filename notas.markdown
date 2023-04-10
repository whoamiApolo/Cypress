Inicializar um projeto node 
    `npm init --yes`

Instalar o Cypress
    npm install -D cypress or npm install -D cypress@12.5.0

Abrir o Cypress
    npx cypress open
    npx cypress run - `Criará um video ao final do teste`


obs.: 
arquivo - jsconfig.json

{
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
  }