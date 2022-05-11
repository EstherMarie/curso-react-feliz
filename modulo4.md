# Módulo 4 | Resolvendo erros do ESLint, criando componentes Title e Description

## Resolvendo erro do ESLint

> em logo.stories.tsx

```
Qual foi o erro?
<Logo {..args}/> // React must be in scope (react-in-jsx-scope)
```

- Para ver a documentação

  - clique com botão direito sobre o erro
  - selecione: quick fix -> show documentation

- Resolvendo o problema
  - import React from "react"
  - No arquivo eslintrc, em rules adicione `"react/jsx-props-no-spreading": off`

## Criando o componente titulo com conteúdo dinâmico

## Criando o componente description
