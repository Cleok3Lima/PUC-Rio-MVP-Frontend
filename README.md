# Gestão de Tempo Frontend

<p align="center">
  <img alt="Cleok3-pic" width="300" src="https://cdn.discordapp.com/attachments/1217082427021725849/1256996429528825866/cleolimadev_1.png?ex=6682cca6&is=66817b26&hm=4b1248106917647f3ee387ca82efd4c732cbe5e5aaeb8fca29a7cd3ae8e079f3&">
</p>

Frontend para a aplicação de Gestão de Tempo e Produtividade, desenvolvida utilizando HTML, CSS e JavaScript. Permite que os usuários se registrem, façam login e gerenciem suas tarefas através de uma interface de usuário.

## Índice

- [Descrição](#descrição)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O frontend da aplicação de Gestão de Tempo oferece uma interface de usuário simples e intuitiva para que os usuários possam se registrar, fazer login e gerenciar suas tarefas. As tarefas podem ser adicionadas, visualizadas, concluídas e excluídas.

## Tecnologias

- HTML
- CSS
- JavaScript

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/Cleok3Lima/PUC-Rio-MVP-Frontend.git
   cd gestao-de-tempo-frontend
   ```

2. Abra o arquivo **index.html**

3. O navegador irá abrir.

## Uso

1. **Registro**: Preencha o formulário de registro com um nome de usuário e uma senha. Clique em "Registrar". Após o registro bem-sucedido, os campos serão limpos e você poderá fazer login.
2. **Login**: Preencha o formulário de login com seu nome de usuário e senha. Clique em "Login". Após o login bem-sucedido, você será redirecionado para a página de gerenciamento de tarefas.
3. **Adicionar Tarefa**: Preencha o formulário de nova tarefa com o título, descrição e data limite. Clique em "Adicionar Tarefa". A tarefa será adicionada à lista de tarefas pendentes, ordenada pela data limite mais próxima.
4. **Concluir Tarefa**: Clique no botão "Concluir" ao lado da tarefa que deseja marcar como concluída. A tarefa será movida para a lista de tarefas concluídas, riscada e com a cor atenuada.
5. **Excluir Tarefa**: Clique no botão "Excluir" ao lado da tarefa que deseja remover.

## Estrutura de Arquivos

```plaintext
gestao-de-tempo-frontend/
├── index.html
├── styles.css
└── script.js
```

- **index.html**: Arquivo principal contendo a estrutura HTML da aplicação.

- **styles.css**: Arquivo de estilos CSS para a aplicação.

- **script.js**: Arquivo JavaScript contendo a lógica para interação com a API backend e manipulação da interface do usuário.

## Funcionalidades

- Registro de usuário
- Login de usuário
- Adicionar nova tarefa
- Listar tarefas pendentes
- Concluir tarefas
- Listar tarefas concluídas
- Excluir tarefas
- Logout

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar esta aplicação.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
