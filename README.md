<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar: 
```
npm install
yarn install
pnpm install
```
3. Tener instalado Nest CLI:
```
npm i -g @nestjs/cli
yarn add -g @nestjs/cli
npm i -g @nestjs/cli
```

4. Levantar la base de datos en docker:
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicación en dev:
````
yarn start:dev
pnpm run start:dev
npm run start: dev
````

6. Construir/Reconstruir la BD de la seed
```
petición GET a http://localhost:3000/api/seed
```

## Stack usado
* MongoDB
* Nest
