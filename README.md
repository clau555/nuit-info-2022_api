## Setup

NodeJS requis.

```bash
$ npm install
```

Pour plus de confort sur webstorm :

- Installer les plugins "Nest" et "Prettier".
- Cocher l'exécution d'ESLint et Prettier dans "Actions on Save".

Pour vscode ou autre je ne sais pas :frowning_face:.

## Exécution

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Tests

Il faut garder à l'esprit qu'on n'a pas le temps, il n'y aura surement aucun test.  
Si l'on en fait, ce seront des tests end to end en priorité.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Structure NestJS

On travaille par modules, chaque module est un dossier dans le dossier `src`.
Un module se compose d'un fichier :

- `*.module.ts` : Définition du module
- `*.controller.ts` : Définition des routes
- `*.service.ts` : Définition des fonctions de service

Dans l'idée, chaque module possède une route principale de forme :  
`/api/{nom du module}/{requête}`
