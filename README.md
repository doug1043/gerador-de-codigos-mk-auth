# Gerador de tags HTML para Notas do MK AUTH

Este projeto tem como objetivo a inserção de imagens (png, jpge, gif, etc) e arquivos de contratos (pdf, svc, data, etc) na opção de notas, disponível na plataforma do [mk auth](https://mk-auth.com.br/). Visando a organização e facilidade ao acesso das informações sobre os aparelhos que estão alocados nos clientes.


## Utilização

Este projeto foi possível utilizando a API do servidor de hospegem de imagens gratuito [IMGUR](https://imgur.com/) junto ao projeto para UPLOAD de imagens [Imgur-Upload](https://github.com/carry0987/Imgur-Upload) desenvolvido por carry0987.

## Configuração

Insira o CLientID para acesso à API do [IMGUR](https://imgur.com/). Para ter acesso a um ClienteID é necessário acessar a página de API [imgur](https://api.imgur.com/) e solicitar uma chave de acesso.

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

No primeiro campo de texto também é possível fazer tags para armazenar contratos ou outros documentos em .pdf, após colocar o código do arquivo em notas do mk auth, ficará um link redirecionavel em uma nova guia para o arquivo.

## DEMO
[Clique aqui para acessar](https://fastwpp.000webhostapp.com/Index.html)

## Contribuições
Requisições Pull são bem vindas.

## License
[MIT](https://choosealicense.com/licenses/mit/)
