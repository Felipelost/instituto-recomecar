# Instituto Recomeçar

Site institucional de uma organização fictícia voltada ao apoio da comunidade e de famílias em situação de vulnerabilidade social.

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-end.

## Tecnologias utilizadas

- HTML5: estrutura semântica das páginas e validação dos campos.
- CSS3: estilos, efeitos visuais e adaptação a diferentes telas.
- Flexbox: organização dos cards.
- Media queries: ajustes do layout para dispositivos móveis.
- Git: controle do histórico e das branches.
- GitHub: hospedagem do código, pull requests, issues e milestones.

## Páginas e funcionalidades

- `index.html`: apresentação do instituto.
- `quemsomos.html`: missão, visão e valores.
- `projetos.html`: apresentação dos projetos sociais.
- `comoajudar.html`: informações sobre doações e voluntariado.
- `cadastro.html`: formulário de interesse em participação.
- Layout responsivo.
- Validação nativa de campos obrigatórios, e-mail e formatos de CPF, telefone e CEP.

## Estrutura do projeto

| Arquivo ou pasta | Finalidade |
| --- | --- |
| `index.html` | Página inicial |
| `quemsomos.html` | Apresentação da organização |
| `projetos.html` | Projetos sociais |
| `comoajudar.html` | Formas de contribuir |
| `cadastro.html` | Formulário de cadastro |
| `css/style.css` | Estilos compartilhados |
| `imagens/` | Imagens do site |
| `README.md` | Documentação do projeto |

## Requisitos

- Navegador atualizado.
- Git instalado para clonar o repositório.
- Visual Studio Code recomendado para edição.
- Extensão Live Server opcional para execução local.

Não há dependências de pacotes para instalar.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Felipelost/instituto-recomecar.git
   ```

2. Entre na pasta:

   ```bash
   cd instituto-recomecar
   ```

3. Para consultar a versão em desenvolvimento:

   ```bash
   git switch develop
   ```

4. Abra a pasta no Visual Studio Code.
5. Abra `index.html` no navegador ou use a opção “Open with Live Server”.

Também é possível baixar o ZIP pelo GitHub e extrair os arquivos.

## Acessibilidade

Foram implementados:

- Idioma da página definido como português do Brasil.
- Elementos semânticos e hierarquia de títulos.
- Texto alternativo na imagem da página inicial.
- Link para pular ao conteúdo principal.
- Foco visível na navegação pelo teclado.
- Identificação da página atual com `aria-current`.
- Rótulos associados aos campos do formulário.
- Instruções de formato associadas com `aria-describedby`.
- Respeito à preferência por movimento reduzido.

Essas melhorias apoiam a acessibilidade. A conformidade completa com WCAG 2.1 AA ainda depende de uma avaliação de todas as páginas e critérios aplicáveis.

## Verificação manual

1. Percorra os links e campos com Tab e Shift + Tab.
2. Acione o link de pular conteúdo com Enter.
3. Confira se o foco permanece visível.
4. Verifique todos os links do menu.
5. Teste o layout em telas menores e com ampliação.
6. Tente enviar o formulário vazio e com formatos incorretos.
7. Confira se as imagens carregam corretamente.

Foi confirmado o funcionamento do link de pular conteúdo e do foco visível na página inicial.

Ainda não há uma suíte de testes automatizados.

## Versionamento e colaboração

- `main`: versão estável.
- `develop`: integração das alterações em desenvolvimento.
- `feature/acessibilidade`: branch utilizada para as melhorias de acessibilidade.
- `docs/readme`: branch destinada à atualização da documentação.

As alterações de acessibilidade foram integradas à `develop` pelo pull request #1.

As mensagens de novos commits seguem Conventional Commits:

- `feat:` para funcionalidades e melhorias.
- `fix:` para correções.
- `docs:` para documentação.

Há mensagens anteriores que não seguem esse padrão.

A issue #2 reúne as tarefas de preparação para publicação e está vinculada à milestone “v1.0.0 — Publicação do Instituto Recomeçar”.

## Versões de entrega

A primeira release planejada é `v1.0.0`.

Será utilizado o formato MAJOR.MINOR.PATCH:

- MAJOR: mudanças incompatíveis com o comportamento anterior.
- MINOR: novas funcionalidades compatíveis.
- PATCH: correções compatíveis.

Ainda não foram criadas tags ou releases.

## Build e publicação

O projeto atual utiliza arquivos HTML e CSS estáticos e não exige compilação.

A minificação, a otimização de imagens e a publicação estão pendentes. As instruções e o endereço público serão adicionados após a conclusão dessas etapas.

## Limitações do formulário

O formulário possui validação no navegador, mas não está conectado a um serviço de recebimento ou banco de dados.

O atributo `method="post"` sozinho não armazena cadastros. O envio precisa ser ajustado antes da publicação.

A validação por `pattern` verifica o formato de CPF, telefone e CEP; não confirma a existência ou validade desses dados.

## Manutenção

- Desenvolver alterações em branches separadas.
- Testar as páginas afetadas antes de integrar mudanças.
- Criar pull requests com descrição das alterações.
- Atualizar o README quando houver mudanças de execução ou funcionalidades.
- Acompanhar as tarefas pela issue e pela milestone.

## Próximos passos

- Concluir a verificação de acessibilidade e responsividade.
- Ajustar o comportamento do formulário.
- Otimizar arquivos e imagens.
- Preparar a versão estável na main.
- Criar a tag e a release v1.0.0.
- Publicar o site e documentar seu endereço.

## Autor

Felipe — estudante de Análise e Desenvolvimento de Sistemas.