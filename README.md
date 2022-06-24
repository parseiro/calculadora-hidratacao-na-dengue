# Protótipo

https://www.figma.com/file/cC73ESfZ0JD8xyb1ftt8X2/Calculadora-Hidrata%C3%A7%C3%A3o-Dengue?node-id=0%3A1

# Como montar as imagens docker

`docker compose -f compose.yml build`

# Como executar as imagens docker

`docker compose -f compose.yml up -d`

Acesse pelo http://localhost:8080

# Como rodar o json-server manualmente (se necessário)

`json-server.cmd --watch .\mock-api\data.json`

# Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

Atividade 11:
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva estrutural ngIf para mostrar ou esconder elementos.
- [x] Formatar a apresentação de dados com Pipes.
- [x] Fazer requisições a API com tratamento da resposta com Observables.
