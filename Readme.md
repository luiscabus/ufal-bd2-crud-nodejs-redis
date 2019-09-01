Comandos:
	- instalar o docker, baixar a imagem padrão do redis, iniciar um container para o redis
	docker pull redis
	docker run --name my-redis13 -p 6379:6379 -d redis redis-server --appendonly no

	- supondo que tenha instalado nodejs e npm, navegar no terminal à pasta bd2-node-redis e entrar os comandos:
	npm install
	npm start



Baseado em 
https://medium.com/@programadriano/node-primeiros-passos-com-redis-9393ec2b2e6d

