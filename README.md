<h1 align="center">😄SISTEMA DE AVALIAÇÃO😄</h1>
<p align="center">

<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>

<img src="/project-root/public/assets/banner.png">

# Sistema de Avaliações com Firebase

Este projeto é um sistema simples de avaliações em que os usuários podem selecionar um humor (feliz, médio, triste), representado por emojis, inserir um comentário e enviar os dados para um banco de dados Firebase, tendo autonomia para verificar os comentários realizadas por outros usuários.

---

## 🛠️ Tecnologias Utilizadas
- **HTML**: Para a estrutura do front-end.
- **CSS**: Para estilização básica.
- **JavaScript**: Para lógica do sistema.
- **Firebase**: Para autenticação e banco de dados.

---

## 📦 Configuração do Projeto

1. **Crie o app no firebase e copie e cole os seus SDKs do seu app**



3. **Crie o arquivo** .env: No diretório raiz do projeto, crie um arquivo chamado .env e insira suas credenciais do Firebase no seguinte formato:
    ```bash
    REACT_APP_API_KEY=your_api_key
    REACT_APP_AUTH_DOMAIN=your_auth_domain
    REACT_APP_PROJECT_ID=your_project_id
    REACT_APP_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_APP_ID=your_app_id
3. **Crie o arquivo:** Instale as devidas dependencias do projeto para funcionar corretamente!
   ```bash
   npm install dotenv@16.4.5 firebase@11.0.2
4. **Para rodar o projeto:** Assim que tudo estiver tudo estiver devidamente configurado, rode o sequinte comando no seu terminal:
   ```bash
   npm run dev
## 🚀 Status do Projeto
>   <img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge"/>
O sistema está finalizado, mas, futuramente ainda passará por futuras melhorias e adições de funcionalidades, assim, também iremos colocar online para visualizações.

---

## ⚙️ Funcionalidades
- **Escolha de Emojis:** O usuário seleciona um humor entre feliz, médio ou triste.

- **Comentários personalizados:** O usuário insere um comentário para detalhar sua avaliação.

- **Armazenamento no Firebase:** Os dados de humor e comentários são enviados para o Firestore Database.

- **Relatório de avaliação:** Relatórios e estatísticas das avaliações e comentarios de usuarios.

- **Reset de senha:** O usuário pode mudar sua senha de autenticação por email, enviado do proprio firebase para sua caixa de entrada.

- **Autenticação de usuario por token:** O usuário tem um token assim que realiza o login, caso realize o logout não é possivel entrar no sistema pela url sem antes estar devidamente conectado.

- **Popup personalizados:** Alertas personalizados usando o sweetalert2.

## 🤝 Como contribuir 

Sinta-se a vontade de contribuir com o projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para sua contribuição:
   ```bash
   git checkout -b <nome_da_branch>
3. Realize suas alterações e faça o commit:
   ```bash
   git commit -m '<mensagem_do_commit>'
4. Envie as alterações para o repositório original:
   ```bash
   git push origin -u <nome_da_branch>
5. Crie um Pull Request para revisão.

## Mande um email para ter sua solicitação pull revisada. 

matheusmiiller44@gmail.com