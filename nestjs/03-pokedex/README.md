<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
 

## Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar 
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5.  Clonar el archivo __.env.template__ y renombrar la copia a __.env__
6.  llenar las variables de entorno definidas en el __.env__
7.  Ejecutar la aplicacion en dev: 
```
yarn start:dev
```
8. Reconstruir la base de datos con la semilla 
```
localhost:3000/api/v2/seed
```

## Stack usuado
* Mongo DB
* Nest

# Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod.
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```