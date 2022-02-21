# Curso React Feliz | CollabCode

## Configurando o projeto

### Criando o projeto com Vite

- `yarn create vite`

### Configurando o Eslint e Prettier

- `yarn create @eslint/config`
  - How would you like to use ESLint? · **style**
  - What type of modules does your project use? · **esm** (modules)
  - Which framework does your project use? · **react**
  - Does your project use TypeScript? · No / **Yes**
  - Where does your code run? · **browser**
  - How would you like to define a style for your project? · **guide**
  - Which style guide do you want to follow? · **airbnb**
  - What format do you want your config file to be in? · **JSON**
- Criar o arquivo `.prettierrc` na raiz do projeto
  ```
    {
      "singleQuote": true,
      "trailingComma": "all",
      "semi": true
    }
  ```
- `yarn add -D eslint-config-prettier prettier`
- No `.eslintrc`, em `extends`: adicionar `"prettier"`
- Criar a pasta oculta `.vscode` e disponibilizar os arquivos settings.json e extensions.json.
  - Para adicionar uma extensão ao extensions.json, basta ir seção extensions, clicar na opção _manage_ > _Add to workspace recommendations_

### Husky e lint-staged

- `npx mrm@2 lint-staged`

### Padrão de commit - Gitmoji

- Instalar o gitmoji
- `npx gitmoji -i`

## Links

[ESLint](https://eslint.org/docs/user-guide/getting-started)  
[Eslint-config-Prettier](https://github.com/prettier/eslint-config-prettier)  
[Husky](https://github.com/typicode/husky)  
[list-staged](https://github.com/okonet/lint-staged)  
[gitmoji](https://github.com/carloscuesta/gitmoji)
