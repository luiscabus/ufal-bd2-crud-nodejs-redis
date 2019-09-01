# CRUD Redis com Nodejs

Trabalho de BD2, dos alunos Audrey Emmely, Jackson Barboza e Luís Cabús.

## Installation

Instalar o docker, baixar a imagem padrão do redis e iniciar um container para o redis com a porta 6379 aberta por padrão. O container com o Redis estará disponível no ip local 127.0.0.1, ou localhost/.

```bash
docker pull redis
docker run --name my-redis13 -p 6379:6379 -d redis redis-server --appendonly no
```

## Usage

Supondo que tenha instalado em sua máquina o nodejs e npm, navegar no terminal à pasta bd2-node-redis e entrar os comandos:

```bash
npm install
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)