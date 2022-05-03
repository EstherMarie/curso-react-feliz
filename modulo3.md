# Módulo 3

## Adiciona font no storybook

- google fonts
- adiciona os links das fonts no `.storybook/preview-head.html`
- adiciona os links das fonts no `index.html`
- adiciona o font-family no `globalStyles/elements/base.css`

## Muda padrão bg para dark

[Backgrounds | Documentação do Storybook](https://storybook.js.org/docs/react/essentials/backgrounds)

### Adicionando para todos os stories:

> No `storybook/preview.js`

```
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
  },
};
```

### Adicionando para um story específico:

> Ex.: Title.stories.tsx

- Para todos os stories de um componente:

```
export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
      backgrounds: {
        default: 'dark',
    },
  },
}
```

- Para um único story:

```
Default.args = {
  children: 'Default Title',
};

Default.parameters: = {
  backgrounds: {
    default: 'dark',
  },
}
```

## Adicionar prop-types

- `yarn add prop-types`

```
// definindo um valor padrão (default)

Logo.defaultProps = {
  simple: false,
}

Logo.propTypes = {
  simple: bool,
  // esse valor não é obrigatório, (é tipo o simple?: bool do TypeScript)
}
```

## Refatora arquitetura de pastas

- Move os arquivos stories para dentro da pasta de cada component.
