# Curso React Feliz | ChatCollab

> [Repo: marcobrunodev/chatcollab](https://github.com/marcobrunodev/chatcollab)

## Módulo 1 | Configurando o projeto

### Criando o projeto com Vite

- `yarn create vite`

### Configurando o Eslint e Prettier

> Melhora os padrões de escrita de código evitando inconsistências

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

> Melhora a qualidade dos commits do projeto por meio de git hooks

- `npx mrm@2 lint-staged`

### Padrão de commit - Gitmoji

> Adiciona um padrão para as mensagens de commit

- Instalar o gitmoji CLI: `npm i -g gitmoji-cli`
- Instalar o gitmoji no projeto: `npx gitmoji -i`

Obs.: Neste Projeto o padrão de commit está sendo feito com o [commitlint](https://commitlint.js.org/) e [Commitizen](https://github.com/commitizen/cz-cli) (só o commitizen já deixa o projeto bem feliz 😃).

- `npm install -g commitizen`
- `commitizen init cz-conventional-changelog --yarn --dev --exact`

## Styled-Components

> CSS-in-JS

- `yarn add styled-components`

## [Módulo 2 | Documentando componentes com o Storybook](./modulo2-storybook.md)

> Documenta os componentes da aplicação

- `npx sb init`
- `yarn storybook`

## [Módulo 3 | Fontes e background no Storybook, prop-types e refatoração da estrutura de pastas](./modulo3.md)

## Links

[Vite](https://vitejs.dev/guide/#browser-support)  
[ESLint](https://eslint.org/docs/user-guide/getting-started)  
[Eslint-config-Prettier](https://github.com/prettier/eslint-config-prettier)  
[Husky](https://github.com/typicode/husky)  
[lint-staged](https://github.com/okonet/lint-staged)  
[gitmoji](https://github.com/carloscuesta/gitmoji)  
[Storybook](https://storybook.js.org/)
