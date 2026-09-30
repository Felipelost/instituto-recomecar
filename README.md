# Instituto Recomeçar

Site institucional de uma organização fictícia voltada ao apoio da comunidade e de famílias em situação de vulnerabilidade social.

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-end.

## Site publicado

https://felipelost.github.io/instituto-recomecar/

## Código da versão entregue

https://github.com/Felipelost/instituto-recomecar/tree/v1.0.0

A tag `v1.0.0` identifica o commit `3b43507`, correspondente à primeira versão publicada.

## Tecnologias utilizadas

- HTML5: estrutura semântica e validação dos campos.
- CSS3: estilos e layout responsivo.
- Flexbox e media queries: organização e adaptação do layout.
- JavaScript: alternância de contraste e verificação do formulário.
- Node.js e npm: execução do build e gerenciamento das dependências.
- html-minifier-terser: minificação de HTML.
- clean-css: minificação de CSS.
- terser: minificação de JavaScript.
- sharp: redimensionamento e compressão de imagens.
- Git e GitHub: versionamento e integração por pull requests.
- GitHub Actions: automação do build e da publicação.
- GitHub Pages: hospedagem do site.

## Páginas e funcionalidades

- `index.html`: apresentação do instituto.
- `quemsomos.html`: missão, visão e valores.
- `projetos.html`: projetos sociais.
- `comoajudar.html`: informações sobre doações e voluntariado.
- `cadastro.html`: formulário demonstrativo.
- Layout responsivo.
- Navegação por teclado com foco visível.
- Link para pular ao conteúdo principal.
- Modo de alto contraste compartilhado entre as páginas.
- Validação de campos obrigatórios, e-mail e formatos de CPF, telefone e CEP.

## Estrutura do projeto

| Arquivo ou pasta | Finalidade |
| --- | --- |
| `index.html` | Página inicial |
| `quemsomos.html` | Apresentação da organização |
| `projetos.html` | Projetos sociais |
| `comoajudar.html` | Formas de contribuir |
| `cadastro.html` | Formulário demonstrativo |
| `css/style.css` | Estilos compartilhados |
| `js/acessibilidade.js` | Alternância e persistência do contraste |
| `js/cadastro.js` | Verificação do preenchimento |
| `imagens/` | Imagens do site |
| `build.cjs` | Geração dos arquivos de produção |
| `package.json` | Dependências e comando de build |
| `package-lock.json` | Registro das versões das dependências |
| `.github/workflows/deploy.yml` | Automação da publicação |
| `.gitignore` | Exclusão de arquivos gerados do versionamento |
| `relatorio-build.json` | Relatório de tamanhos antes e depois do build |
| `dist/` | Arquivos de produção gerados pelo build |
| `README.md` | Documentação do projeto |

As pastas `node_modules/` e `dist/` não são versionadas.

## Requisitos

Para visualizar o site publicado, basta um navegador atualizado.

Para gerar a versão de produção localmente:

- Node.js 24.
- npm.
- Git para clonar o repositório.

O Visual Studio Code e a extensão Live Server podem ser utilizados para edição e visualização local.

## Como executar localmente

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/Felipelost/instituto-recomecar.git
cd instituto-recomecar
```

Abra `index.html` com o Live Server para visualizar os arquivos de desenvolvimento.

Para consultar o código da versão entregue:

```bash
git checkout v1.0.0
```

Esse comando deixa o repositório em modo de consulta da tag. Para continuar o desenvolvimento:

```bash
git switch develop
```

## Build de produção

Instale as dependências e execute o build:

```bash
npm ci
npm run build
```

O comando executa `build.cjs`, que:

- Minifica as cinco páginas HTML.
- Minifica os arquivos CSS e JavaScript.
- Otimiza as imagens.
- Mantém a estrutura e os caminhos relativos dos arquivos.
- Gera a pasta `dist/`.
- Cria `.nojekyll` na pasta de produção.
- Registra os resultados em `relatorio-build.json`.

Abra `dist/index.html` com o Live Server para verificar a versão otimizada.

As alterações devem ser feitas nos arquivos de origem. A pasta `dist/` é gerada novamente pelo build.

## Resultados da otimização

Resultados registrados no build da primeira versão publicada:

| Recursos | Tamanho original | Tamanho otimizado | Redução |
| --- | ---: | ---: | ---: |
| HTML, CSS e JavaScript | 33.051 bytes | 20.579 bytes | 37,74% |
| Imagem `atendimento.jpg` | 788.935 bytes | 127.237 bytes | 83,87% |

A imagem foi mantida em JPEG, com qualidade configurada em 80 e largura máxima de 1.600 pixels, sem ampliação de imagens menores.

O build utiliza a imagem otimizada somente quando o resultado é menor que o arquivo original.

Essas porcentagens representam redução no tamanho dos arquivos. Não foi medido o tempo global de carregamento antes e depois.

## Publicação automática

O site é hospedado no GitHub Pages, com a opção GitHub Actions selecionada como origem da publicação.

O workflow `.github/workflows/deploy.yml` é executado após alterações na branch `main`. Também permite execução manual pela aba Actions.

O processo possui duas etapas:

1. `build`: baixa o código, configura o Node.js, instala as dependências com `npm ci`, executa `npm run build` e prepara a pasta `dist`.
2. `deploy`: publica os arquivos preparados no GitHub Pages.

A publicação ocorre somente após o sucesso do build.

Para acompanhar a execução:

https://github.com/Felipelost/instituto-recomecar/actions

## Acessibilidade

Foram implementados:

- Idioma português do Brasil definido no HTML.
- Elementos semânticos e hierarquia de títulos.
- Texto alternativo na imagem.
- Link para pular ao conteúdo principal.
- Foco visível nos elementos interativos.
- Identificação da página atual com `aria-current`.
- Rótulos associados aos campos.
- Agrupamento de campos com `fieldset` e `legend`.
- Instruções de formato associadas com `aria-describedby`.
- Botão de contraste com estado informado por `aria-pressed`.
- Persistência da preferência de contraste em `localStorage`, quando disponível.
- Respeito à preferência por movimento reduzido.
- Mensagem de resultado do formulário com `role="status"`.

A preferência de contraste é armazenada no navegador. Os dados preenchidos no formulário não são armazenados pelo site.

## Contraste visual

Combinações verificadas:

| Texto | Fundo | Razão de contraste |
| --- | --- | ---: |
| Branco | Preto | 21:1 |
| Amarelo | Preto | 19,55:1 |
| Branco | `#2e7d32` | 5,12:1 |
| Branco | `#1b5e20` | 7,86:1 |
| `#2e7d32` | `#f5f5f5` | 4,70:1 |

As combinações medidas superam a razão mínima de 4,5:1 para texto comum do nível AA.

As melhorias implementadas e os testes realizados não equivalem a uma auditoria completa de conformidade com WCAG 2.1 AA.

## Verificação manual

Foram testados localmente e no site publicado:

- Navegação entre as cinco páginas.
- Carregamento dos estilos e da imagem.
- Ativação e desativação do alto contraste.
- Persistência do contraste ao trocar de página.
- Navegação por teclado e foco visível.
- Verificação do formulário com campos vazios e dados fictícios.
- Adaptação do layout em tela de celular.

Não há uma suíte de testes automatizados. Testes com leitores de tela e avaliação completa dos critérios WCAG permanecem como oportunidades de melhoria.

## Cadastro demonstrativo

O formulário é utilizado exclusivamente para demonstração acadêmica.

- Utilize somente dados fictícios.
- O botão verifica o preenchimento no navegador.
- Nenhum cadastro é enviado a um servidor ou armazenado pelo site.
- Não há backend ou banco de dados.
- A validação por `pattern` verifica o formato de CPF, telefone e CEP, sem confirmar sua existência ou autenticidade.
- A verificação depende de JavaScript; sem ele, o botão permanece desabilitado.

## Versionamento e colaboração

- `main`: versão utilizada na publicação.
- `develop`: integração das alterações.
- `feature/acessibilidade`: melhorias de navegação e acessibilidade.
- `feature/alto-contraste`: implementação do modo de alto contraste.
- `feature/otimizacao-deploy`: build, otimização e configuração da publicação.
- `docs/readme`: atualização inicial da documentação.
- `docs/publicacao`: documentação do build e do site publicado.

Integrações realizadas:

- PR #1: acessibilidade para `develop`.
- PR #3: documentação para `develop`.
- PR #4: alto contraste para `develop`.
- PR #5: otimização e deploy para `develop`.
- PR #6: integração de `develop` à `main`.

Os novos commits utilizam Conventional Commits:

- `feat:` para funcionalidades e melhorias.
- `fix:` para correções.
- `docs:` para documentação.

Há mensagens anteriores que não seguem esse padrão.

A issue #2 reúne as tarefas de preparação para publicação e está vinculada à milestone “v1.0.0 — Publicação do Instituto Recomeçar”.

## Versões de entrega

A tag anotada `v1.0.0` foi criada e enviada ao GitHub.

O versionamento utiliza o formato MAJOR.MINOR.PATCH:

- MAJOR: mudanças incompatíveis.
- MINOR: funcionalidades compatíveis.
- PATCH: correções compatíveis.

A tag identifica o código da entrega. A criação de uma GitHub Release é uma etapa separada.

## Manutenção

- Desenvolver alterações em branches separadas.
- Testar as páginas afetadas e executar o build.
- Integrar alterações por pull requests.
- Acompanhar o resultado do GitHub Actions após mudanças na `main`.
- Atualizar a documentação quando houver mudanças.
- Registrar correções e melhorias em issues.

## Melhorias futuras

- Realizar testes com leitores de tela.
- Ampliar a avaliação de acessibilidade.
- Medir o desempenho com ferramentas de auditoria.
- Adicionar testes automatizados relevantes.
- Avaliar imagens em formatos modernos e diferentes resoluções.

## Autor

Felipe — estudante de Análise e Desenvolvimento de Sistemas.