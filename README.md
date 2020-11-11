# Delivery Much Challenge
Essa API foi projetada com base em um desafio feito pela [Delivery Much](https://www.deliverymuch.com.br/) onde teria que desenvolver uma aplicação Node ou GO em conjunto com o Docker. No caso escolhi desenvolver com NodeJS pelo fato de eu ter mais experiência com a linguagem. 

## Iniciando
Primeiramente, certifique-se de ter instalado em seu computador o NodeJS, Docker e o docker-compose.

#### Clone o projeto

Execute o comando para clonar o projeto
```
git clone https://github.com/lucasca2/delivery-challenge.git
```

#### Variáveis de ambiente
Crie um arquivo .env e copie o conteúdo do arquivo .env.example, caso necessário substitua a chave da API do [Giphy](https://developers.giphy.com/) dentro do arquivo de configurações.
Caso não queira fazer isso, poderá usar a chave fornecida no arquivo de exemplo.
```
GIPHY_API_KEY={SUA_CHAVE}
```

#### Rode o projeto
Certifique-se que o docker esteja em execução, entre na pasta do projeto usando o terminal e execute os comandos para rodar o docker.
```
docker-compose build
```
```
docker-compose up
```
Feito isso, se tudo tiver dado certo, receberá uma mensagem no terminal confirmando que o servidor foi iniciado.

## Endpoints

Listar receitas de acordo com os igredientes.

```[GET] /recipes```

Parâmetros   | Tipo    | Descrição
:-----------:|:-------:|:---------
i            | string  | Igredientes da receita separados por virgula (ex: "onions, garlic")

Exemplo:
```
http://localhost:3000/recipes?i=eggs,bacon
```
Resposta Exemplo:
```json
{
    "keywords": ["eggs", "bacon"],
    "recipes": [
        {
            "title": "Grandpa Farrell's  Scrambled Eggs",
            "gif": "https://media1.giphy.com/media/S9FtQO5fxOMsT5l1wa/giphy.gif?cid=d91fb301gt7y2vntid9d4rjly6t7cwr1ynonqkvhi3796jwd&rid=giphy.gif",
            "ingredients": ["bacon", "eggs"],
            "link": "http://www.recipezaar.com/Grandpa-Farrells-Scrambled-Eggs-123977"
        },
        {
            "title": "\nMicrowave Scrambled Eggs Recipe\n\n",
            "gif": "https://media1.giphy.com/media/S9FtQO5fxOMsT5l1wa/giphy.gif?cid=d91fb301so5rkoc0juc9ldx0xp3wdrgmscife7qrh5g4s2mm&rid=giphy.gif",
            "ingredients": ["bacon", "eggs"],
            "link": "http://cookeatshare.com/recipes/microwave-scrambled-eggs-30382"
        }
    ]
}
```
---



