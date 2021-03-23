# Desafio do Grupo Tesseract para vaga de Front-End Jr

## Este desafio consiste em uma listagem dos membros do Tesseract e exibição de detalhes sobre a pessoa selecionada.

###  Requisitos minimos do projeto
- [x] Lista com os atuais membros no Github, com login e foto
- [x] Campo de filtro para filtrar os membros (por login) 
- [x] Ao clicar em um membro, exibir informações daquela pessoa:<br>
      -> Nome;<br>
      -> Quantidade de repositórios;<br>
      -> Quantidade de seguidores;<br>
      -> Data em que a pessoa entrou no GitHub.<br>


### Os membros do Tesseract, assim como suas informações, devem ser carregados de modo dinâmico pela api do github:
- [x] https://api.github.com/orgs/grupotesseract/public_members
- [x] https://api.github.com/users/{user}

### 🔎 Como rodar o código

Primeiramente deve-se clonar o repositório para sua máquina, com o seguinte comando no Git:

```shell
git clone https://github.com/giuliabriao/desafio-tesseract.git
```
Agora, abra o arquivo ```index.html``` para consultar e pesquisar as informações dos membros Tesseract.

### 📌 A arquitetura do projeto


Utilizei o padrão **MVC** (Model-View-Controller) neste desafio, tanto pela facilidade de organização e manutenção que esse padrão oferece, quanto para treinar e me aprimorar em criar aplicações padronizadas.

Existem duas models: uma para fazer requisitação na API do GitHub buscando apenas os dados de login e avatar do usuário (``UserSetModel()``), enquanto que a outra foca nas informações mais específicas como nome, quantidade de repositórios, quantidade de seguidores e data de criação da conta (``UserInfoModel()``). <br><br> As informações da primeira model são apresentadas na interface pela view que faz aparecer na tela (``UserView()``), e a segunda model conversa com a segunda view para mostrar as informações mais detalhadas por meio de um modal que abre na tela ao clicar no avatar (``UserInfoModalView()``).

O controller (``UserController()``) faz a intermediação entre a model e a view, de forma que faça aparecer os usuários na tela e também o modal ao clicar na imagem do membro Tesseract. Além disso, também intermedia um método (``searchUsers(login)``) de busca dos membros pelo login, o que também gera um modal caso não encontre um login ou ele esteja incorreto.

### 🚀 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto até o presente momento:

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [BootStrap](https://getbootstrap.com/)
