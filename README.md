# Gerador de tags HTML para Notas do MK AUTH

Este projeto visa a implementação de fotos e arquivos em PDF com informações sobre os clientes utilizando a função de notas da plataforma [mk auth](https://mk-auth.com.br/).

## Utilização

Este projeto foi possível utilizando a API do site de hospegem de imagens gratuito [IMGUR](https://imgur.com/) junto ao projeto para UPLOAD de imagens [Imgur-Upload](https://github.com/carry0987/Imgur-Upload) desenvolvido por carry0987.

## Configuração

Insira o CLientID para acesso à API do [IMGUR](https://imgur.com/)

```javascript
// js/upload.js
new Imgur({
    clientid: 'YOUR CLIENT ID', //You can change this ClientID
    callback: feedback
});
```

## Funcionamento

![funcionamento](https://i.imgur.com/mPbomN5.gif)

Caso não tenha o link da imagem, basta clicar no botão "Carregar Imagem" e fazer o upload da imagem desejada.

No primeiro campo de texto também é possível fazer tags para armazenar contratos ou outros documentos em PDF. Em notas ficará um link redirecionavel em uma nova guia do arquivo.

## DEMO
[Clique aqui para acessar](https://fastwpp.000webhostapp.com/Index.html)

## Contribuições
Requisições Pull são bem vindas.

## License
[MIT](https://choosealicense.com/licenses/mit/)
